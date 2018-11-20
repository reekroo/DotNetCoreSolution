import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../../Models/Shop/product';

import { UserCartDataService } from '../../../Services/data.user.cart.service';

@Component({
    selector: "cart-list",
    templateUrl: './cart-product-list.html',
    styleUrls: ['./cart.css'],
    providers: [UserCartDataService]
})

export class CartProductListComponent {

    @Input() products: Product[];

    constructor(private dataService: UserCartDataService) { }

    delete(id: number) {
        this.dataService.removeProductFromCart(id).subscribe(data => {

            this.products = this.products.filter(x => x.id != id);
        });
    }

    deleteAll() {
        this.dataService.removeProductsFromCart().subscribe(data => {

            this.products = [];
        });
    }

}