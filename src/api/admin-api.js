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

export function addCoaching(model: FormData): Promise<any> {
    return API.post(`admin/coachings/add`, model);
}

export function addCoachingDetails(model): Promise<any> {
    return API.patch(`admin/coaching/details/add`, model);
}

export function deleteCoaching(id: string): Promise<any> {
    return API.delete(`admin/coachings/delete/` + id);
}

export function deleteCoachingDetails(id): Promise<any> {
    return API.delete(`admin/coaching/details/remove/` + id);
}

export function addFeedback(model): Promise<any> {
    return API.post(`admin/coaching/feedback/add`, model);
}

export function updateFeedback(id, model): Promise<any> {
    return API.put(`admin/coaching/feedback/modify/` + id, model);
}

export function deleteFeedback(id: string): Promise<any> {
    return API.delete(`admin/coaching/feedback/delete` + id);
}

export function addFood(model): Promise<any> {
    return API.post(`admin/food/create`, model);
}

export function updateFood(id, model): Promise<any> {
    return API.put(`admin/food/modify/` + id, model);
}

export function addFoodPoint(model): Promise<any> {
    return API.post(`admin/food/point/create`, model);
}

export function updateFoodPoint(id, model): Promise<any> {
    return API.put(`admin/food/point/modify/` + id, model);
}