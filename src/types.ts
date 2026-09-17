export interface Member {
  id: number;
  name: string;
  post: string;
  image: string;
  introduction: string;
  category?: 'leadership' | 'head' | 'core';
}

export interface FacultyMentor {
  name: string;
  role: string;
  department: string;
  image: string;
}

export interface ClubEvent {
  name: string;
  iconName: string;
  description: string;
  report?: string;
  category?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
}

export interface SkywatchScheduleItem {
  time?: string;
  title: string;
  description: string;
}

export interface SkywatchFaq {
  question: string;
  answer: string;
}

export interface ReferenceLink {
  title: string;
  url: string;
  description?: string;
}
