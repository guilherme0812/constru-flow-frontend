import type { Provider } from "./authService";
import apiInstance from "./axios";
import type { DemandDataType } from "./demandService";

export type ApplicationBody = {
    demandId: string;
    providerId: string;
    proposedAmount: number;
    proposedDurationDays: number;
    termsAndConditions: string;
}

export enum ApplicationStatus {
    SENT = "sent",
    UNDER_REVIEW = "under_review",
    ACCEPTED = "accepted",
    REJECTED = "rejected",
    WITHDRAWN = "withdrawn",
}

export type ApplicationDataType = {
    id: string
    demand: DemandDataType
    provider: Provider
    proposedAmount: string
    termsAndConditions: string
    status: ApplicationStatus
}

export const createApplication = async (body: ApplicationBody) => {
    const response = await apiInstance.post<ApplicationDataType>('/applications', body);
    return response.data;
}

export type GetApplicationsParams = {
    providerId?: string
    contractorId?: string
}

export const getApplications = async (params: GetApplicationsParams) => {
    const response = await apiInstance({
        method: "GET",
        url: "/applications",
        params: params
    })
    return response.data;
}