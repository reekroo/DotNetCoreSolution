import { Component, Input } from '@angular/core';

import { RefinancingRate } from '../../../../models/bank/refinancing-rate';

@Component({
    selector: 'refinancing-rate-section',
    templateUrl: './refinancing-rate-section.html'
})

export class RefinancingRateComponent {

    @Input() refinancingRate: RefinancingRate;
}