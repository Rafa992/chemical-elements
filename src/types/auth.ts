export interface Register {
    email: string;
    password: string;
    name: string;
    laterality: string;
    version: string;
    currentRange: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface User extends Omit<Register, 'password'> {
    createdAt: string;
    updatedAt: string;
    id: string;
} 

export interface LoginResponse {
    user: User
    accessToken: string;
    refreshToken: string;
}
