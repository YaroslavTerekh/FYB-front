import API from '../axios-settings';

export function getCoaches(): Promise<any> {
    return API.get(`content/coaches/`);
}

export function getFeedbacks(): Promise<any> {
    return API.get(`admin/coaching/feedbacks/all`);
}

export function getCoaching(): Promise<any> {
    return API.get(`content/coachings/all`);
}

export function getFood(): Promise<any> {
    return API.get(`content/food/all`);
}