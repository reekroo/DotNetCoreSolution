import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../base/base-news';
import { News } from '../../../Models/News/news';

@Component({
    selector: 'specific-news-section',
    styles: [require('./specific-news-section.less')],
    templateUrl: './specific-news-section.html'
})

export class SpecificNewsSectionComponent extends BaseNewsComponent {

    @Input() news: News[];
}