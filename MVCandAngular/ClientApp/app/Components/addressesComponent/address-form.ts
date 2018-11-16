import { Component, Input } from '@angular/core';

import { Address } from '../../Models/address';

@Component({
    selector: "address-form",
    templateUrl: './address-form.html'
})

export class AddressFormComponent {

    @Input() address: Address;
}