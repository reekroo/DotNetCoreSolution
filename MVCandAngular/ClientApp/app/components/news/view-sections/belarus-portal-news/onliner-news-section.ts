import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../../../../shared/bases/news/base-news';

import { News } from '../../../../models/news/news';

@Component({
    selector: 'onliner-news-section',
    templateUrl: './onliner-news-section.html',
    styleUrls: ['../../../../assets/less/news/news-onliner-section.less']
})

export class OnlinerNewsSectionComponent extends BaseNewsComponent {

    @Input() title: string;
    @Input() news: { items: News[]; }[] = [];

    section: boolean = false;

    onClick() {
        this.section = !this.section;
    }
}