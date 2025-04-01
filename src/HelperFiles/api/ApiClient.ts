import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://dummyjson.com';

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


apiClient.interceptors.request.use(
  async (config) => {
    const token =  await AsyncStorage.getItem('userToken');
    console.log('token is',token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error?.response?.data || error.message);
    return Promise.reject(error.response?.data || { success: false, message: 'An error occurred' });
  }
);

export const makeRequest = async <T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await apiClient({
      method,
      url: endpoint,
      data,
      ...config,
    });

    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export default apiClient;
