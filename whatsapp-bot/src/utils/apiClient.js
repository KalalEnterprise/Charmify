import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
apiClient.interceptors.request.use(
    (config) => {
        // You can add custom logic here before sending the request
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
apiClient.interceptors.response.use(
    (response) => {
        // You can add custom logic here for handling responses
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;