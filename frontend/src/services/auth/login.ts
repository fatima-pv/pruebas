import { LoginRequest } from "@interfaces/auth/LoginRequest";
import Api from "@services/api";
import { AuthResponse } from "@interfaces/auth/AuthResponse";

export async function login(loginRequest: LoginRequest) {
    try {
        const api = await Api.getInstance();
        const response = await api.post<LoginRequest, AuthResponse>(loginRequest, {
            url: `/auth/login`
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}
