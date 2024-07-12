export interface User {
    _id: string;
    username: string;
    email: string;
    bio: string;
    profileImage: string;
    followers: string[];
    following: string[];
    joinDate: string;
}
export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
}