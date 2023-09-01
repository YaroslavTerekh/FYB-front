import API from '../axios-settings';

export function addCoach(model: FormData): Promise<any> {
    return API.post(`admin/coaches/add`, model);
}

export function updateCoach(model: FormData, id: string): Promise<any> {
    return API.post(`admin/coaches/modify/` + id, model);
}
