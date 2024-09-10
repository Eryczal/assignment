export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address?: {
        street?: string;
        suite?: string;
        city?: string;
        zipcode?: string;
        geo?: {
            lat?: string;
            lng?: string;
        };
    };
    website?: string;
    company?: {
        name?: string;
        catchPhrase?: string;
        bs?: string;
    };
};

export type Filter = {
    name: string;
    username: string;
    email: string;
    phone: string;
};

export type Action = {
    text: string;
    type: FilterType;
};

export type FilterType = "name" | "username" | "email" | "phone";
