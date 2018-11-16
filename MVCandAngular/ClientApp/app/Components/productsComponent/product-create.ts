import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../../Services/data.products.service';

import { Product } from '../../Models/product';

@Component({
    templateUrl: './product-create.html',
    providers: [DataService]
})

export class ProductsCreateComponent {

    product: Product = new Product();
    location: Location;

    constructor(private dataService: DataService, private router: Router, location: Location) {
        this.location = location;
    }

    save() {
        this.dataService.createProduct(this.product).subscribe(data => this.location.back());
    }

    backClicked() {
        this.location.back();
    }
}