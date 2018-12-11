import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../../../../shared/bases/news/base-news';

import { News } from '../../../../models/news/news';

@Component({
    selector: 'news-section',
    styles: [require('../../../../assets/less/news/news-section.less')],
    templateUrl: './news-section.html'
})

export class NewsSectionComponent extends BaseNewsComponent {

    @Input() news: News[];
}