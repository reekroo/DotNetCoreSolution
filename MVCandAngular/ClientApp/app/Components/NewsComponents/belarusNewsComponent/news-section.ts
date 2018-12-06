import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../base/base-news';
import { News } from '../../../Models/News/news';

@Component({
    selector: 'news-section',
    styles: [require('./news-section.less')],
    templateUrl: './news-section.html'
})

export class NewsSectionComponent extends BaseNewsComponent {

    @Input() news: News[];
}