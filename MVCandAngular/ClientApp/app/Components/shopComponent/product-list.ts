import { Component, OnInit } from '@angular/core';

import { DataService } from '../../Services/data.shop.service';
import { Product } from '../../Models/product';

@Component({
    templateUrl: './product-list.html',
    providers: [DataService]
})
export class ShopProductListComponent implements OnInit {

    products: Product[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getProducts().subscribe((data: Product[]) => this.products = data);
    }
}