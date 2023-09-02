import API from '../axios-settings';

export function addCoach(model: FormData): Promise<any> {
    return API.post(`admin/coaches/add`, model);
}

export function updateCoach(model: FormData, id: string): Promise<any> {
    return API.put(`admin/coaches/modify/` + id, model);
}

export function deleteCoach(id: string): Promise<any> {
    return API.delete(`admin/coaches/delete/` + id);
}
