import API from '../axios-settings';

export function GetImgUrl(id: string): any {
    return API.get(`content/file/` + id);
}
