import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/shop/product';

@Injectable()

export class DataService {

    private url = "/api/shop";

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get(this.url);
    }

    getProduct(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    addProduct(product: Product) {
        return this.http.post(this.url, product);
    }
}