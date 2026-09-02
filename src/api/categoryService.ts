import apiInstance from "./axios";

export const getCategories = async () => {
    const response = await apiInstance.get('/categories');
    return response.data;
}