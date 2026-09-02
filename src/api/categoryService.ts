import apiInstance from "./axios";

export type CategoryDataType = {
    id: string,
    name: string,
    description: string | null,
    parentId: string | null
}

export const getCategories = async () => {
    const response = await apiInstance.get<CategoryDataType[]>('/categories');
    return response.data;
}