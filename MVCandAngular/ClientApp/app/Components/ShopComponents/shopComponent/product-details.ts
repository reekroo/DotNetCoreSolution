﻿import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../../../services/shop/data.shop.service';

import { Product } from '../../../Models/Shop/product';

@Component({
    templateUrl: './product-details.html',
    styleUrls: ['./product-details.css'],
    providers: [DataService]
})
export class ShopProductDetailsComponent implements OnInit {

    id: number;
    location: Location;
    product: Product;
    loaded: boolean = false;

    constructor(private dataService: DataService, activeRoute: ActivatedRoute, location: Location) {
        this.location = location;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id) {
            this.dataService.getProduct(this.id)
                .subscribe((data: Product) => { this.product = data; this.loaded = true; });
        };
    }
    
    backClicked() {
        this.location.back();
    }
}