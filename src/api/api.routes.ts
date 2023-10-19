import { environment } from "src/environments/environment";

const BASE_URL = environment.apiUrl;

export const API_ROUTES = {
    register: BASE_URL + '/register',
    login: BASE_URL + '/login',
}