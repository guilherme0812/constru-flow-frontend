import apiInstance from "./axios";

export type ApplicationBody = {
    demandId: string;
    providerId: string;
    proposedAmount: number;
    proposedDurationDays: number;
    termsAndConditions: string;
}

export type CategoryDataType = {
    id: string,
    name: string,
    description: string | null,
    parentId: string | null
}

export const createApplication = async (body: ApplicationBody) => {
    const response = await apiInstance.post<CategoryDataType[]>('/applications', body);
    return response.data;
}