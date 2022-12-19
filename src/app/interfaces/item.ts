import { User } from "./user";

export interface Item {
    id: string;
    title: string;
    image: string;
    description: string;
    created_at: any;
    owner: User;
}
