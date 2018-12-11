import { Component, OnInit } from '@angular/core';

import { combineLatest } from 'rxjs';

import { DataService } from '../../../services/shop/data.user.service';
import { UserAddressDataService } from '../../../services/shop/data.user.address.service';
import { UserCartDataService } from '../../../services/shop/data.user.cart.service';

import { User } from '../../../Models/Shop/user';
import { Address } from '../../../Models/Shop/address';
import { Product } from '../../../Models/Shop/product';
import { Cart } from '../../../Models/Shop/cart';

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
            
            this.userProducts = cart.products;

            if (combinedResult[2]) {
                this.showCart = true;
            }
        });
    }

}