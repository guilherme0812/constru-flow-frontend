import apiInstance from "./axios";

export enum DemandStatus {
    DRAFT = "draft",
    PUBLISHED = "published",
    UNDER_REVIEW = "under_review",
    AWARDED = "awared",
    CANCELLED = "cancelled",
    COMPLETED = "completed"
}

export type DemandDataType = {
    id: string
    contractorId: string
    title: string
    description: string
    categoryId: string
    worksiteLocation: string
    locationLat: number
    locationLng: number
    estimatedStartDate: string
    executionPeriodDays: number
    budgetRange: string
    requiredDocuments: string[]
    applicationDeadline: string
    status: DemandStatus
    createdAt: string
}

export const getDemands = async () => {
    const response = await apiInstance.get<DemandDataType[]>('/demands');
    return response.data;
}