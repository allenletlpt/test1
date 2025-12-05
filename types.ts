export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  imageUrl: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  type: 'keynote' | 'session' | 'break' | 'workshop';
  location?: string;
}

export enum TicketType {
  STUDENT = 'STUDENT',
  PROFESSIONAL = 'PROFESSIONAL',
  VIP = 'VIP'
}

export interface SubmissionForm {
  fullName: string;
  email: string;
  topic: string;
  abstract: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}