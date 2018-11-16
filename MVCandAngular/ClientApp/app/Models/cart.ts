import { Product } from "./product";

export class Cart {
    constructor(
        public id?: number,
        public userId?: number,
        public products?: Product[]
    ) { }
}