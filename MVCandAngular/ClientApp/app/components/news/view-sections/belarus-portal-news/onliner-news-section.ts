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
    textBtn: string = "Show more news";

    onClick() {
        this.section = !this.section;
        this.textBtn = this.section ? "Hide" : "Show more news"; 
    }

    scroll(el: any) {
        el.scrollIntoView();
    }
}