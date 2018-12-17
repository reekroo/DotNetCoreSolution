import { Component, Input } from '@angular/core';

import { Rate } from '../../../../models/bank/rate';

@Component({
    selector: 'rate-section',
    templateUrl: './rate-section.html',
    styles: [require('../../../../assets/less/bank/currency-rate-colorising.less')]
})

export class RateSectionComponent {

    
    @Input() rate: Rate;
    @Input() delta: number;
    @Input() isUpper: number;
}