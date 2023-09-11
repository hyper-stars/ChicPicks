import { ProductRating } from "./product-rating";

export class Product {
    public id!: number;
    public title!: string;
    public category!: string;
    public description!: string;
    public image!: string;
    public price!: number;
    public rating!: ProductRating;
}