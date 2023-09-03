const TokenKey = "TOKEN";

export function getAccessToken(): string {
    return localStorage.getItem(TokenKey);
}

export function setAccessToken(token: string): string {
    return localStorage.setItem(TokenKey, token);
}
