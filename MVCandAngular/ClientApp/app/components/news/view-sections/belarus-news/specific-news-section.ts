import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../../../../shared/bases/news/base-news';

import { News } from '../../../../models/news/news';

@Component({
    selector: 'specific-news-section',
    templateUrl: './specific-news-section.html',
    styles: [require('../../../../assets/less/news/specific-news-section.less')]
})

export class SpecificNewsSectionComponent extends BaseNewsComponent {

    @Input() news: News[];
}