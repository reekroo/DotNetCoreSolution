import { Component, Input } from '@angular/core';

import { Address } from '../../Models/address';


import { UserAddressDataService } from '../../Services/data.user.address.service';

@Component({
    selector: "address-list",
    templateUrl: './address-list.html',
    styleUrls: ['./address.css']
})

export class AddressListComponent {

    @Input() addresses: Address[];

    constructor(private dataService: UserAddressDataService) { }


    remove(id: number) {
        this.dataService.removeAddress(id).subscribe(data => {

            this.addresses = this.addresses.filter(x => x.id != id);
        });
    }
}
