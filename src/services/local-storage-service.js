const TokenKey = "TOKEN";

export function getAccessToken(): string {
    debugger;
    return localStorage.getItem(TokenKey);
}

export function setAccessToken(token: string): string {
    return localStorage.setItem(TokenKey, token);
}
