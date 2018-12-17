import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../../../../shared/bases/news/base-news';

import { News } from '../../../../models/news/news';

@Component({
    selector: 'news-section',
    templateUrl: './news-section.html',
    styles: [require('../../../../assets/less/news/news-section.less')]
})

export class NewsSectionComponent extends BaseNewsComponent {

    @Input() news: News[];
}