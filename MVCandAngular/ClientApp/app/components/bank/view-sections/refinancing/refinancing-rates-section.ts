import { Component, Input } from '@angular/core';

import { RefinancingRate } from '../../../../models/bank/refinancing-rate';

@Component({
    selector: 'refinancing-rates-section',
    templateUrl: './refinancing-rates-section.html',
    styles: [require('../../../../assets/less/bank/refinancing-rates-section.less')],
})

export class RefinancingRatesComponent {

    @Input() refinancingRates: RefinancingRate[];
}