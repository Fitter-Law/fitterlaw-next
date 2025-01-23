export interface WordPressPost {
    id: number;
    title: string;
    content: string;
    type: string;
    slug: string;
    date: string;
}

export interface MembershipLevel {
    id: number;
    name: string;
    description: string;
    initial_payment: number;
    billing_amount: number;
    cycle_number: number;
    cycle_period: string;
}

export interface WordPressUser {
    id: number;
    username: string;
    email: string;
    registered: string;
}
