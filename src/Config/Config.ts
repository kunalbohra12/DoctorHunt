// API Configuration
export const API_BASE_URL = 'https://api.doctorhunt.com/v1';

// API Endpoints
export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
        VERIFY_EMAIL: '/auth/verify-email',
        REFRESH_TOKEN: '/auth/refresh-token'
    },
    DOCTORS: {
        LIST: '/doctors',
        GET_BY_ID: (id: string) => `/doctors/${id}`,
        GET_AVAILABILITY: (id: string) => `/doctors/${id}/availability`,
        GET_REVIEWS: (id: string) => `/doctors/${id}/reviews`,
        GET_RATINGS: (id: string) => `/doctors/${id}/ratings`
    },
    APPOINTMENTS: {
        CREATE: '/appointments',
        LIST: '/appointments',
        GET_BY_ID: (id: string) => `/appointments/${id}`,
        CANCEL: (id: string) => `/appointments/${id}/cancel`,
        RESCHEDULE: (id: string) => `/appointments/${id}/reschedule`
    },
    VIDEO: {
        INITIALIZE: '/video-sessions/initialize',
        END: (id: string) => `/video-sessions/${id}/end`,
        GET_TOKEN: (id: string) => `/video-sessions/${id}/token`
    },
    PATIENTS: {
        UPDATE_PROFILE: '/patients/profile',
        GET_MEDICAL_RECORDS: '/patients/medical-records',
        UPLOAD_MEDICAL_RECORD: '/patients/medical-records/upload',
        GET_EMERGENCY_CONTACTS: '/patients/emergency-contacts',
        ADD_EMERGENCY_CONTACT: '/patients/emergency-contacts'
    },
    CHAT: {
        SEND: '/chat/messages',
        GET_MESSAGES: (doctorId: string) => `/chat/messages/${doctorId}`,
        GET_HISTORY: (doctorId: string) => `/chat/history/${doctorId}`
    },
    PAYMENTS: {
        CREATE_INTENT: '/payments/create-intent',
        HISTORY: '/payments/history',
        GET_BY_ID: (id: string) => `/payments/${id}`
    },
    NOTIFICATIONS: {
        LIST: '/notifications',
        MARK_READ: (id: string) => `/notifications/${id}/read`,
        UPDATE_PREFERENCES: '/notifications/preferences'
    },
    SETTINGS: {
        NOTIFICATIONS: '/settings/notifications',
        PRIVACY: '/settings/privacy',
        LANGUAGE: '/settings/language',
        THEME: '/settings/theme'
    }
};

// API Timeouts
export const API_TIMEOUTS = {
    DEFAULT: 10000,
    UPLOAD: 30000,
    VIDEO: 60000
};

// API Headers
export const API_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

// API Error Messages
export const API_ERROR_MESSAGES = {
    NETWORK_ERROR: 'Network connection error. Please check your internet connection.',
    SERVER_ERROR: 'Server error. Please try again later.',
    UNAUTHORIZED: 'Unauthorized access. Please login again.',
    FORBIDDEN: 'Access forbidden. You don\'t have permission to perform this action.',
    NOT_FOUND: 'Resource not found.',
    VALIDATION_ERROR: 'Please check your input and try again.',
    SESSION_EXPIRED: 'Your session has expired. Please login again.',
    PAYMENT_FAILED: 'Payment failed. Please try again.',
    VIDEO_SESSION_ERROR: 'Video session error. Please try again.',
    UPLOAD_ERROR: 'File upload failed. Please try again.'
};

// API Response Codes
export const API_RESPONSE_CODES = {
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
};

// API Pagination
export const API_PAGINATION = {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100,
};

// API Cache
export const API_CACHE = {
    TTL: 5 * 60 * 1000, // 5 minutes
    MAX_SIZE: 50 * 1024 * 1024 // 50MB
};

// API Retry
export const API_RETRY = {
    MAX_ATTEMPTS: 3,
    DELAY: 1000, // 1 second
};

// API Upload
export const API_UPLOAD = {
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_TYPES: ['image/jpeg', 'image/png', 'application/pdf'],
};

// API WebSocket
export const API_WEBSOCKET = {
    URL: 'wss://api.doctorhunt.com/ws',
    RECONNECT_INTERVAL: 5000, // 5 seconds
    MAX_RECONNECT_ATTEMPTS: 5,
};

export const STORAGE_KEYS = {
    AUTH_TOKEN: 'auth_token',
    REFRESH_TOKEN: 'refresh_token',
    USER_PROFILE: 'user_profile',
    NOTIFICATION_SETTINGS: 'notification_settings',
    PRIVACY_SETTINGS: 'privacy_settings',
    LANGUAGE: 'language',
    THEME: 'theme'
};

export const SUCCESS_MESSAGES = {
    LOGIN: 'Successfully logged in.',
    REGISTER: 'Successfully registered.',
    PROFILE_UPDATE: 'Profile updated successfully.',
    APPOINTMENT_CREATED: 'Appointment created successfully.',
    APPOINTMENT_CANCELLED: 'Appointment cancelled successfully.',
    APPOINTMENT_RESCHEDULED: 'Appointment rescheduled successfully.',
    PAYMENT_SUCCESS: 'Payment successful.',
    SETTINGS_UPDATED: 'Settings updated successfully.',
    RECORD_UPLOADED: 'Medical record uploaded successfully.',
    MESSAGE_SENT: 'Message sent successfully.'
};

export const VALIDATION_RULES = {
    PASSWORD_MIN_LENGTH: 8,
    PASSWORD_MAX_LENGTH: 32,
    PHONE_REGEX: /^\+?[1-9]\d{1,14}$/,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    NAME_MIN_LENGTH: 2,
    NAME_MAX_LENGTH: 50
};

export const FILE_UPLOAD_LIMITS = {
    MAX_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_TYPES: ['image/jpeg', 'image/png', 'application/pdf'],
    MAX_FILES: 5
};

export const VIDEO_CONFIG = {
    MAX_DURATION: 30 * 60 * 1000, // 30 minutes
    QUALITY_OPTIONS: ['low', 'medium', 'high'],
    DEFAULT_QUALITY: 'medium',
    MAX_PARTICIPANTS: 2
};

export default {
    API_BASE_URL,
    API_TIMEOUTS,
    API_HEADERS,
    API_ENDPOINTS,
    STORAGE_KEYS,
    API_ERROR_MESSAGES,
    API_RESPONSE_CODES,
    API_PAGINATION,
    API_CACHE,
    API_RETRY,
    API_UPLOAD,
    API_WEBSOCKET,
    SUCCESS_MESSAGES,
    VALIDATION_RULES,
    FILE_UPLOAD_LIMITS,
    VIDEO_CONFIG
}; 