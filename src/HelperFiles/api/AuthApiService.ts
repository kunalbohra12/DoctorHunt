import { makeRequest } from './ApiClient';
import API_ENDPOINTS from './Endpoint';
interface LoginType {
  email: string;
  password: string;
  // firebaseToken: string;

}
interface SignUpType {
  email: string;
  password?: string;
  // firebaseToken: string;
}
interface VerifyOtpType {
  email: string;
  otp: string;
  password: string;
}
interface ApiResponse<T> {
  carts(carts: any): unknown;
  products(products: any): unknown;
  url(url: any): unknown;
  success: boolean;
  data: T;
  message?: string;
}

const LoginRequest = async (body: LoginType): Promise<ApiResponse<any>> =>
  await makeRequest('POST', API_ENDPOINTS.LOGIN, body);

const SignUpRequest = async (body: SignUpType): Promise<ApiResponse<any>> =>
  await makeRequest('POST', API_ENDPOINTS.REGISTER, body);

const VerifyOtp = async (body: VerifyOtpType): Promise<ApiResponse<any>> =>
  await makeRequest('POST', API_ENDPOINTS.VERIFY_OTP, body);

const getProducts = async (body: VerifyOtpType): Promise<ApiResponse<any>> =>
  await makeRequest('GET', API_ENDPOINTS.PRODUCTS_DATA, body);

const getCartsData = async (): Promise<ApiResponse<any>> =>
  await makeRequest('GET', API_ENDPOINTS.CARTS_DATA);

const getCategoriesData = async (): Promise<ApiResponse<any>> =>
  await makeRequest('GET', API_ENDPOINTS.CATEGORIES_DATA);

export {
  LoginRequest,
  SignUpRequest,
  VerifyOtp,
  getProducts,
  getCartsData,
  getCategoriesData,
};


