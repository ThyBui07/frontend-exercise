export interface List {
    id: string;
    title: string;
    items: Item[];
}

export interface Item {
    id: number;
    title: string;
    provider: string;
    image: string;
}

