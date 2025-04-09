import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Config from '../Config/Config';
import { 
    ApiResponse, 
    PaginatedResponse, 
    Doctor, 
    Appointment, 
    Patient,
    VideoSession,
    Message,
    Review,
    Payment,
    PaymentIntent,
    Notification,
    MedicalRecord,
    NotificationSettings,
    PrivacySettings,
    SearchFilters,
    ApiError
} from '../Types/ApiTypes';

class ApiService {
    private static instance: ApiService;
    private api: AxiosInstance;
    private token: string | null = null;

    private constructor() {
        this.api = axios.create({
            baseURL: Config.API_BASE_URL,
            timeout: Config.API_TIMEOUTS.DEFAULT,
            headers: Config.API_HEADERS
        });

        this.setupInterceptors();
    }

    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }

    private setupInterceptors(): void {
        this.api.interceptors.request.use(
            (config) => {
                if (this.token) {
                    config.headers.Authorization = `Bearer ${this.token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401) {
                    // Handle token expiration
                    this.token = null;
                    // Navigate to login or refresh token
                }
                return Promise.reject(error);
            }
        );
    }

    public setToken(token: string): void {
        this.token = token;
    }

    // Authentication APIs
    public async login(email: string, password: string): Promise<ApiResponse<{ token: string }>> {
        const response = await this.api.post(Config.API_ENDPOINTS.AUTH.LOGIN, {
            email,
            password
        });
        return response.data;
    }

    public async register(userData: Partial<Patient>): Promise<ApiResponse<{ token: string }>> {
        const response = await this.api.post(Config.API_ENDPOINTS.AUTH.REGISTER, userData);
        return response.data;
    }

    public async forgotPassword(email: string): Promise<ApiResponse<void>> {
        const response = await this.api.post(Config.API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
        return response.data;
    }

    // Doctor APIs
    public async getDoctors(filters?: SearchFilters): Promise<ApiResponse<PaginatedResponse<Doctor>>> {
        const response = await this.api.get(Config.API_ENDPOINTS.DOCTORS.LIST, { params: filters });
        return response.data;
    }

    public async getDoctorById(id: string): Promise<ApiResponse<Doctor>> {
        const response = await this.api.get(Config.API_ENDPOINTS.DOCTORS.GET_BY_ID(id));
        return response.data;
    }

    public async getDoctorAvailability(doctorId: string, date: string): Promise<ApiResponse<any>> {
        const response = await this.api.get(Config.API_ENDPOINTS.DOCTORS.GET_AVAILABILITY(doctorId), {
            params: { date }
        });
        return response.data;
    }

    public async getDoctorReviews(doctorId: string): Promise<ApiResponse<PaginatedResponse<Review>>> {
        const response = await this.api.get(Config.API_ENDPOINTS.DOCTORS.GET_REVIEWS(doctorId));
        return response.data;
    }

    // Appointment APIs
    public async createAppointment(appointmentData: Partial<Appointment>): Promise<ApiResponse<Appointment>> {
        const response = await this.api.post(Config.API_ENDPOINTS.APPOINTMENTS.CREATE, appointmentData);
        return response.data;
    }

    public async getAppointments(): Promise<ApiResponse<PaginatedResponse<Appointment>>> {
        const response = await this.api.get(Config.API_ENDPOINTS.APPOINTMENTS.LIST);
        return response.data;
    }

    public async cancelAppointment(appointmentId: string): Promise<ApiResponse<void>> {
        const response = await this.api.post(Config.API_ENDPOINTS.APPOINTMENTS.CANCEL(appointmentId));
        return response.data;
    }

    public async rescheduleAppointment(appointmentId: string, newSlotId: string): Promise<ApiResponse<Appointment>> {
        const response = await this.api.post(Config.API_ENDPOINTS.APPOINTMENTS.RESCHEDULE(appointmentId), {
            newSlotId
        });
        return response.data;
    }

    // Video Consultation APIs
    public async initializeVideoSession(appointmentId: string): Promise<ApiResponse<VideoSession>> {
        const response = await this.api.post(Config.API_ENDPOINTS.VIDEO.INITIALIZE, { appointmentId });
        return response.data;
    }

    public async endVideoSession(sessionId: string): Promise<ApiResponse<void>> {
        const response = await this.api.post(Config.API_ENDPOINTS.VIDEO.END(sessionId));
        return response.data;
    }

    // Patient Profile APIs
    public async updateProfile(profileData: Partial<Patient>): Promise<ApiResponse<Patient>> {
        const response = await this.api.put(Config.API_ENDPOINTS.PATIENTS.UPDATE_PROFILE, profileData);
        return response.data;
    }

    public async getMedicalRecords(): Promise<ApiResponse<PaginatedResponse<MedicalRecord>>> {
        const response = await this.api.get(Config.API_ENDPOINTS.PATIENTS.GET_MEDICAL_RECORDS);
        return response.data;
    }

    public async uploadMedicalRecord(recordData: FormData): Promise<ApiResponse<MedicalRecord>> {
        const response = await this.api.post(Config.API_ENDPOINTS.PATIENTS.UPLOAD_MEDICAL_RECORD, recordData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }

    // Chat APIs
    public async sendMessage(messageData: Partial<Message>): Promise<ApiResponse<Message>> {
        const response = await this.api.post(Config.API_ENDPOINTS.CHAT.SEND, messageData);
        return response.data;
    }

    public async getMessages(doctorId: string): Promise<ApiResponse<PaginatedResponse<Message>>> {
        const response = await this.api.get(Config.API_ENDPOINTS.CHAT.GET_MESSAGES(doctorId));
        return response.data;
    }

    // Payment APIs
    public async createPaymentIntent(appointmentId: string): Promise<ApiResponse<PaymentIntent>> {
        const response = await this.api.post(Config.API_ENDPOINTS.PAYMENTS.CREATE_INTENT, { appointmentId });
        return response.data;
    }

    public async getPaymentHistory(): Promise<ApiResponse<PaginatedResponse<Payment>>> {
        const response = await this.api.get(Config.API_ENDPOINTS.PAYMENTS.HISTORY);
        return response.data;
    }

    // Notification APIs
    public async getNotifications(): Promise<ApiResponse<PaginatedResponse<Notification>>> {
        const response = await this.api.get(Config.API_ENDPOINTS.NOTIFICATIONS.LIST);
        return response.data;
    }

    public async markNotificationAsRead(notificationId: string): Promise<ApiResponse<void>> {
        const response = await this.api.post(Config.API_ENDPOINTS.NOTIFICATIONS.MARK_READ(notificationId));
        return response.data;
    }

    // Settings APIs
    public async updateNotificationSettings(settings: NotificationSettings): Promise<ApiResponse<NotificationSettings>> {
        const response = await this.api.put(Config.API_ENDPOINTS.SETTINGS.NOTIFICATIONS, settings);
        return response.data;
    }

    public async updatePrivacySettings(settings: PrivacySettings): Promise<ApiResponse<PrivacySettings>> {
        const response = await this.api.put(Config.API_ENDPOINTS.SETTINGS.PRIVACY, settings);
        return response.data;
    }
}

export default ApiService.getInstance(); 