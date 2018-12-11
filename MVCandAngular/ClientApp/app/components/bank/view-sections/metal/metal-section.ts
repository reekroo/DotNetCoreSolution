import { Component, Input } from '@angular/core';

import { Ingot } from '../../../../models/bank/ingot';

@Component({
    selector: 'metal-section',
    templateUrl: './metal-section.html'
})

export class MetalRatesComponent {

    @Input() metalRates: Ingot[];
}
