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

export function addCoachDetails(id: string, model): Promise<any> {
    return API.post(`admin/coaches/${id}/details/add`, model);
}

export function addCoachingDetails(model): Promise<any> {
    return API.patch(`admin/coaching/details/add`, model);
}
export function addCoachingParentDetails(model): Promise<any> {
    return API.post(`admin/coachings/details/parents/add`, model);
}

export function deleteCoaching(id: string): Promise<any> {
    return API.delete(`admin/coachings/delete/` + id);
}

export function deleteCoachingDetails(id): Promise<any> {
    return API.delete(`admin/coaching/details/remove/` + id);
}

export function deleteCoachingParentDetails(id): Promise<any> {
    return API.delete(`coachings/details/parents/${id}/delete/`);
}

export function deleteCoachDetails(id): Promise<any> {
    return API.delete(`admin/coaches/details/${id}/delete`);
}

export function addFeedback(model): Promise<any> {
    return API.post(`admin/coaching/feedback/add`, model);
}

export function updateFeedback(id, model): Promise<any> {
    return API.put(`admin/coaching/feedback/modify/` + id, model);
}

export function deleteFeedback(id: string): Promise<any> {
    return API.delete(`admin/coaching/feedback/delete/` + id);
}

export function addFood(model): Promise<any> {
    return API.post(`admin/food/create`, model);
}

export function updateFood(id, model): Promise<any> {
    return API.put(`admin/food/modify/` + id, model);
}

export function deleteFood(id: string): Promise<any> {
    return API.delete(`admin/food/delete/` + id);
}

export function deleteFoodPoint(id: string): Promise<any> {
    return API.delete(`admin/food/point/delete/` + id);
}


export function addFoodPoint(model): Promise<any> {
    return API.post(`admin/food/point/create`, model);
}

export function updateFoodPoint(id, model): Promise<any> {
    return API.put(`admin/food/point/modify/` + id, model);
}

export function getUsers(): Promise<any> {
    return API.get(`admin/users/all`);
}

export function addFAQPoint(model): Promise<any> {
    return API.post(`admin/faq/create`, model);
}

export function updateFAQPoint(id, model): Promise<any> {
    return API.put(`admin/faq/modify/` + id, model);
}

export function deleteFAQ(id: string): Promise<any> {
    return API.delete(`admin/faq/delete/` + id);
}

export function addPhotosToCoaching(model): Promise<any> {
    return API.patch(`admin/coachings/examples/add/`, model);
}

export function addPhotosToCoach(model): Promise<any> {
    return API.put(`admin/coaches/photos/add/`, model);
}

export function addVideoToCoaching(id, model): Promise<any> {
    return API.post(`admin/video/${id}/add`, model);
}
