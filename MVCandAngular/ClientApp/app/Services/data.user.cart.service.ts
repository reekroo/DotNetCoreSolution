import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../Models/product';

@Injectable()

export class UserCartDataService {

    private url = "/api/cart";

    constructor(private http: HttpClient) { }
    
    getCartProducts() {
        return this.http.get(this.url);
    }
    
    addProductToCart(product: Product) {
        return this.http.post(this.url, product);
    }

    removeProductFromCart(id: number) {
        return this.http.delete(this.url + '/' + id);
    }

    removeProductsFromCart() {
        return this.http.delete(this.url);
    }
}