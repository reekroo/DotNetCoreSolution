import { Component, Input } from '@angular/core';

import { RefinancingRate } from '../../../Models/Bank/RefinancingRate';


@Component({
    selector: 'refinancing-rates-section',
    templateUrl: './refinancing-rates-section.html'
})

export class RefinancingRatesComponent {

    @Input() refinancingRates: RefinancingRate[];
}