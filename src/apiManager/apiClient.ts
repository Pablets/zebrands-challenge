import axios from 'axios';
export const controller = new AbortController();

const initialConfig = {
    baseURL: 'https://api.github.com/',
    headers: {
        'Content-Type': 'application/json',
    },
    signal: controller.signal,
};

const apiClient = axios.create(initialConfig);

if ((process.env.NODE_ENV !== 'test', process.env?.GITHUB_CLIENT_ID && process.env?.GITHUB_CLIENT_SECRET)) {
    apiClient.interceptors.request.use(function (config) {
        const basicAuth = {
            username: process.env.GITHUB_CLIENT_ID!,
            password: process.env.GITHUB_CLIENT_SECRET!,
        };
        config.auth = basicAuth;
        return config;
    });
}

export default apiClient;
