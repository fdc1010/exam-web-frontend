export interface User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isDeleted: boolean;
}

export interface SeriesType {
    name: string;
    data: number[];
}