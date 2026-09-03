import { TOKEN_STORAGE_KEY } from "@/context/authContext";
import axios from "axios"

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

apiInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // handle 401s, refresh tokens, global error logging, etc.
        return Promise.reject(error);
    }
);

export default apiInstance;