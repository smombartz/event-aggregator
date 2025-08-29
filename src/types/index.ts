export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface Event {
  id: string;
  title: string;
  description: string | null;
  startDateTime: string;
  endDateTime: string | null;
  locationName: string | null;
  locationUrl: string | null;
  cost: string | null;
  tags: string[];
  sourceUrl: string;
  extractionConfidence: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CrawlRequest {
  urls: string[];
  userId: string;
}

export interface CrawlResponse {
  success: boolean;
  processedCount: number;
  errors: string[];
  events: Event[];
}