import { Component, Input } from '@angular/core';

import { RefinancingRate } from '../../../Models/Bank/RefinancingRate';


@Component({
    selector: 'refinancing-rate-section',
    templateUrl: './refinancing-rate-section.html'
})

export class RefinancingRateComponent {

    @Input() refinancingRate: RefinancingRate;
}