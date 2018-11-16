import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { UserAddressDataService } from '../../Services/data.user.address.service';

import { Address } from '../../Models/address';

@Component({
    templateUrl: './address-create.html',
    providers: [UserAddressDataService]
})

export class AddressCreateComponent {

    address: Address = new Address();
    location: Location;

    constructor(private dataService: UserAddressDataService, private router: Router, location: Location) {
        this.location = location;
    }

    save() {
        this.dataService.createAddress(this.address).subscribe(data => this.location.back());
    }

    backClicked() {
        this.location.back();
    }
}