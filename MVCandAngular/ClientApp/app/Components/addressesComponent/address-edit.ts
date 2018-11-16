import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserAddressDataService } from '../../Services/data.user.address.service';

import { Address } from '../../Models/address';

@Component({
    templateUrl: './address-edit.html',
    providers: [UserAddressDataService]
})

export class AddressEditComponent implements OnInit {

    id: number;
    location: Location;
    address: Address;
    loaded: boolean = false;

    constructor(private dataService: UserAddressDataService, private router: Router, activeRoute: ActivatedRoute, location: Location) {

        this.location = location;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id)
            this.dataService.getAddress(this.id)
                .subscribe((data: Address) => {
                    this.address = data;
                    if (this.address != null) this.loaded = true;
                });
    }

    save() {
        this.dataService.updateAddress(this.address).subscribe(data => this.location.back());
    }

    backClicked() {
        this.location.back();
    }
}