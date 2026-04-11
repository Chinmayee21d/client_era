/**
 * Lightweight stateless verification token utility using Web Crypto API.
 * Compatible with Cloudflare Workers / Edge Runtime.
 */

const encoder = new TextEncoder();

async function getCryptoKey(secret: string): Promise<CryptoKey> {
  const keyData = encoder.encode(secret);
  return crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

export async function signData(data: any, secret: string, expiresInMinutes: number = 10): Promise<string> {
  const expires = Date.now() + expiresInMinutes * 60 * 1000;
  const payload = JSON.stringify({ ...data, expires });
  const key = await getCryptoKey(secret);
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
  
  // Combine payload and signature into a base64 string
  const payloadBase64 = btoa(payload);
  const signatureBase64 = btoa(String.fromCharCode(...new Uint8Array(signature)));
  
  return `${payloadBase64}.${signatureBase64}`;
}

export async function verifyData(token: string, secret: string): Promise<any | null> {
  try {
    const [payloadBase64, signatureBase64] = token.split('.');
    if (!payloadBase64 || !signatureBase64) return null;

    const payload = atob(payloadBase64);
    const signature = new Uint8Array(atob(signatureBase64).split('').map(c => c.charCodeAt(0)));
    
    const key = await getCryptoKey(secret);
    const isValid = await crypto.subtle.verify('HMAC', key, signature, encoder.encode(payload));
    
    if (!isValid) return null;

    const data = JSON.parse(payload);
    if (Date.now() > data.expires) return null;

    return data;
  } catch (e) {
    return null;
  }
}
