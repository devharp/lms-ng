import { environment } from "src/environments/environment";

const BASE_URL = environment.apiUrl;

export const API_ROUTES = {
    register: BASE_URL + '/user-auth/register',
    login: BASE_URL + '/user-auth/login',
}