import API from '../axios-settings';

export function getCoaches(): Promise<any> {
    return API.get(`content/coaches/`);
}

export function getFeedbacks(): Promise<any> {
    return API.get(`content/coaches/feedbacks/all`);
}
