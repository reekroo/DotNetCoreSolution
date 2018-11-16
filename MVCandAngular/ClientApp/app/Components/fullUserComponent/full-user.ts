import { Component, OnInit } from '@angular/core';

import { combineLatest } from 'rxjs';

import { DataService } from '../../Services/data.user.service';
import { UserAddressDataService } from '../../Services/data.user.address.service';
import { UserCartDataService } from '../../Services/data.user.cart.service';

import { User } from '../../Models/user';
import { Address } from '../../Models/address';
import { Product } from '../../Models/product';
import { Cart } from '../../Models/cart';

@Component({
    templateUrl: './full-user.html',
    providers: [DataService, UserAddressDataService, UserCartDataService]
})

export class FullUserComponent implements OnInit {

    user: User;
    userAddresses: Address[];
    userProducts: Product[];

    showAddresses: boolean = false;
    showCart: boolean = false;

    constructor(private dataService: DataService, private userAddressDataService: UserAddressDataService, private userCartDataService: UserCartDataService) { }

    ngOnInit() {
        this.load();
    }

    load() {
        
        var user$ = this.dataService.getUser();
        var address$ = this.userAddressDataService.getAddresses();
        var cart$ = this.userCartDataService.getCartProducts();

        combineLatest(user$, address$, cart$).subscribe( combinedResult => {

            this.user = combinedResult[0];
            this.userAddresses = combinedResult[1] as Address[];
            
            if (combinedResult[1]) {
                this.showAddresses = true;
            }

            var cart = combinedResult[2] as Cart;

            console.log(cart.products.length);

            this.userProducts = cart.products;

            if (combinedResult[2]) {
                this.showCart = true;
            }
        });
    }

}