import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../Services/data.products.service';

import { Product } from '../../../Models/Shop/product';

@Component({
    templateUrl: './product-list.html',
    providers: [DataService]
})

export class ProductListComponent implements OnInit {

    products: Product[];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.load();
    }

    load() {
        this.dataService.getProducts().subscribe((data: Product[]) => this.products = data);
    }

    delete(id: number) {
        this.dataService.deleteProduct(id).subscribe(data => this.load());
    }

    deleteAllProducts() {
        this.dataService.deleteAllProducts().subscribe(data => this.load());
    }
}