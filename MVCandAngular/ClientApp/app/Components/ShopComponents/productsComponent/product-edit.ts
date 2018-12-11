import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../../../services/shop/data.products.service';

import { Product } from '../../../Models/Shop/product';

@Component({
    templateUrl: './product-edit.html',
    providers: [DataService]
})

export class ProductsEditComponent implements OnInit {

    id: number;
    location: Location;
    product: Product;
    loaded: boolean = false;

    constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute, location: Location) {

        this.location = location;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id)
            this.dataService.getProduct(this.id)
                .subscribe((data: Product) => {
                    this.product = data;
                    if (this.product != null) this.loaded = true;
                });
    }

    save() {
        this.dataService.updateProduct(this.product).subscribe(data => this.location.back());
    }

    backClicked() {
        this.location.back();
    }
}