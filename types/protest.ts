export type ProtestStatus = "Active" | "Upcoming" | "Completed";

export interface Protest {
    id: string;
    title: string;
    description: string;
    state: string;
    city: string;
    address: string;
    latitude: number;
    longitude: number;
    category: string;
    status: ProtestStatus;
    crowdSize: number;
    startTime: string;
    endTime?: string;
    updatedAt: string;
}
