import { Component, Input } from '@angular/core';

import { RefinancingRate } from '../../../Models/Bank/RefinancingRate';

@Component({
    selector: 'refinancing-rates-section',
    templateUrl: './refinancing-rates-section.html',
    styles: [require('./refinancing-rates-section.less')],
})

export class RefinancingRatesComponent {

    @Input() refinancingRates: RefinancingRate[];
}