import API from '../axios-settings';

export function getCoaches(): Promise<any> {
    return API.get(`content/coaches/`);
}
