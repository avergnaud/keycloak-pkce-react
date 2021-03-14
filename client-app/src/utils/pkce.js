export function generateState() {
    const length = 30;
    let stateValue = "";
    const alphaNumericCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const l = alphaNumericCharacters.length;
    for(var i=0; i<length; i++) {
        stateValue += alphaNumericCharacters.charAt(Math.floor(Math.random()*l));
    }
    return stateValue;
}

export function generateCodeVerifier() {
    let codeVerifier = "";
    const randomByteArray = new Uint8Array(32);
    window.crypto.getRandomValues(randomByteArray);
    codeVerifier = base64urlencode(randomByteArray);
    return codeVerifier;
}

/* should not be called from a reducer */
export async function generateCodeChallenge(codeVerifier) {
    let codeChallenge = "";
    const textEncoder = new TextEncoder('US-ASCII');
    const encodedValue = textEncoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest("SHA-256", encodedValue);
    codeChallenge = base64urlencode(Array.from(new Uint8Array(digest)));
    return codeChallenge;
}

function base64urlencode(sourceValue) {
    var stringValue = String.fromCharCode.apply(null, sourceValue);
    var base64encoded = btoa(stringValue);
    var base64urlEncoded = base64encoded.replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    return base64urlEncoded;
}