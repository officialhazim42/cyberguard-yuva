export type EventCategory =
  | "Workshops"
  | "Cybersecurity Awareness Campaigns"
  | "Digital Safety Sessions"
  | "Community Outreach";

export interface EventItem {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  time?: string;
  format: "Online" | "In-Person" | "Hybrid";
  location: string;
  description: string;
  officialLink?: string;
  image?: string;
  verified: boolean;
}

/**
 * Verified upcoming events list.
 * Note: Per project policy, we strictly avoid fabricating events, dates, attendance numbers, or achievements.
 * When real events are officially scheduled, add them to this array.
 */
export const upcomingEvents: EventItem[] = [];

/**
 * Verified past activities list.
 * Maintained only for genuine, documented sessions.
 */
export const pastActivities: EventItem[] = [];

export const eventCategories: EventCategory[] = [
  "Workshops",
  "Cybersecurity Awareness Campaigns",
  "Digital Safety Sessions",
  "Community Outreach",
];
