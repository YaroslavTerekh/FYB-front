const TokenKey = "TOKEN";

export function getAccessToken(): string {
    return localStorage.getItem(TokenKey);
}

export function setAccessToken(token: string): string {
    return localStorage.setItem(TokenKey, token);
}

export function deleteAccessToken(navigate): string {
    navigate("/");
    window.scrollBy({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
    window.location.reload();
    return localStorage.removeItem(TokenKey);
}
