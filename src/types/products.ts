export interface IProductItem {
    id: string;
    title: string;
    price: string;
    discountedPrice: string;
    image: string;
    review: number;
    reviewers: number;
};


export interface ICategory {
    id: string;
    title: string;
    value: string;
}