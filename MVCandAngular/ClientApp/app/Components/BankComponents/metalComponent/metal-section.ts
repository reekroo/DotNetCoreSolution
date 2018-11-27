import { Component, Input } from '@angular/core';

import { Ingot } from '../../../Models/Bank/Ingot';

@Component({
    selector: 'metal-section',
    templateUrl: './metal-section.html'
})

export class MetalRatesComponent {

    @Input() metalRates: Ingot[];
}
