export enum ViewType {
    Card,
    Table,
}

export interface IBook {
    author: string; 
    title: string;
    description: string;
    img_url: string;
}