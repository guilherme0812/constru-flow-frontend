import apiInstance from "./axios";

export type UserDataType = {
    id: string
    type: "contractor" | "provider"
    email: string
    phone: string | null
    status: string
    createdAt: string
    updatedAt: string
    contractor: Contractor
    provider: null
}

export interface Contractor {
    userId: string
    legalName: string
    taxId: string
    companySize: string
    operatingRegions: string[]
    averageRating: number
    isDocumentVerified: boolean
}


export type LoginDataType = {
    accessToken: string,
    user: UserDataType
}

export type LoginBodyType = {
    email: string,
    password: string,
}

export const login = async (loginData: LoginBodyType) => {
    const response = await apiInstance.post<LoginDataType>('/auth/login', loginData);
    return response.data;
}

export const getMe = async () => {
    const response = await apiInstance.get<UserDataType>('/auth/me');
    return response.data;
}