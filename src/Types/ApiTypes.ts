// Common Types
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    errors?: string[];
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

// Doctor Types
export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    avatar: string;
    status: 'online' | 'offline' | 'busy';
    rating: number;
    price: number;
    experience: string;
    languages: string[];
    education: string[];
    about: string;
    availability: DoctorAvailability[];
    reviews: Review[];
}

export interface DoctorAvailability {
    id: string;
    date: string;
    slots: TimeSlot[];
}

export interface TimeSlot {
    id: string;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
    price: number;
}

// Appointment Types
export interface Appointment {
    id: string;
    doctorId: string;
    patientId: string;
    slotId: string;
    date: string;
    startTime: string;
    endTime: string;
    status: 'scheduled' | 'completed' | 'cancelled';
    type: 'video' | 'in-person';
    notes?: string;
    createdAt: string;
    updatedAt: string;
}

// Patient Types
export interface Patient {
    id: string;
    name: string;
    avatar: string;
    type: 'self' | 'child' | 'other';
    age?: number;
    gender?: 'male' | 'female' | 'other';
    contactNumber: string;
    email?: string;
    medicalHistory?: string[];
    emergencyContacts: EmergencyContact[];
}

export interface EmergencyContact {
    id: string;
    name: string;
    relationship: string;
    contactNumber: string;
}

// Video Session Types
export interface VideoSession {
    id: string;
    appointmentId: string;
    doctorId: string;
    patientId: string;
    status: 'initializing' | 'active' | 'ended';
    startTime: string;
    endTime?: string;
    recordingUrl?: string;
    token: string;
}

// Chat Types
export interface Message {
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: string;
    type: 'text' | 'image' | 'file';
    status: 'sent' | 'delivered' | 'read';
}

// Review Types
export interface Review {
    id: string;
    doctorId: string;
    patientId: string;
    rating: number;
    comment: string;
    timestamp: string;
    likes: number;
}

// Payment Types
export interface Payment {
    id: string;
    appointmentId: string;
    amount: number;
    currency: string;
    status: 'pending' | 'completed' | 'failed';
    paymentMethod: string;
    timestamp: string;
}

export interface PaymentIntent {
    clientSecret: string;
    amount: number;
    currency: string;
}

// Notification Types
export interface Notification {
    id: string;
    userId: string;
    title: string;
    message: string;
    type: 'appointment' | 'message' | 'payment' | 'system';
    isRead: boolean;
    timestamp: string;
    data?: any;
}

// Medical Record Types
export interface MedicalRecord {
    id: string;
    patientId: string;
    type: string;
    title: string;
    description: string;
    fileUrl: string;
    uploadedBy: string;
    timestamp: string;
}

// Settings Types
export interface NotificationSettings {
    appointmentReminders: boolean;
    chatMessages: boolean;
    paymentUpdates: boolean;
    promotionalEmails: boolean;
}

export interface PrivacySettings {
    profileVisibility: 'public' | 'private' | 'contacts';
    showMedicalHistory: boolean;
    showEmergencyContacts: boolean;
}

// Search Types
export interface SearchFilters {
    specialty?: string;
    availability?: string;
    rating?: number;
    priceRange?: {
        min: number;
        max: number;
    };
    languages?: string[];
    gender?: 'male' | 'female' | 'other';
}

// Error Types
export interface ApiError {
    code: string;
    message: string;
    details?: any;
}

// WebSocket Types
export interface WebSocketMessage {
    type: 'chat' | 'notification' | 'appointment' | 'video';
    data: any;
    timestamp: string;
} 