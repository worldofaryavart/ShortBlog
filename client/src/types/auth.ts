export interface User {
    _id: string;
    username: string;
    email: string;
}
export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
}