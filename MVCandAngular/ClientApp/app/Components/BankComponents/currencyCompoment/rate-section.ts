import { Component, Input } from '@angular/core';

import { Rate } from '../../../Models/Bank/Rate';


@Component({
    selector: 'rate-section',
    templateUrl: './rate-section.html',
    styles: [require('./rate-section.less')]
})

export class RateSectionComponent {

    
    @Input() rate: Rate;
    @Input() delta: number;
    @Input() isUpper: number;
}