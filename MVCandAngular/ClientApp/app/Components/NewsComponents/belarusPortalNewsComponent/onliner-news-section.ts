import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../base/base-news';
import { News } from '../../../Models/News/news';

@Component({
    selector: 'onliner-news-section',
    templateUrl: './onliner-news-section.html'
})

export class OnlinerNewsSectionComponent extends BaseNewsComponent {

    @Input() title: string;
    @Input() news: { items: News[]; }[] = [];

    section: boolean = false;

    onClick() {
        this.section = !this.section;
    }
}