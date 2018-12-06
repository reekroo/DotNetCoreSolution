import { Component, OnInit } from '@angular/core';

import { SvobodaNewsService } from '../../../Services/data.news.svoboda.service';

import { News } from '../../../Models/News/news';
import { BaseNewsComponent } from '../base/base-news';

@Component({
    templateUrl: './news-clip-board-section.html',
    styles: [require('./news-clip-board-section.less')],
    providers: [SvobodaNewsService]
})

export class SvobodaNewsComponent extends BaseNewsComponent implements OnInit {

    news: { items: News[]; }[] = [];
    title = "Radio Svoboda";

    constructor(private dataService: SvobodaNewsService) {
        super();
    }

    ngOnInit() {

        this.getAllNews();
    }
    
    private getAllNews() {

        this.dataService.getNews().subscribe((data: News[]) => {

            let k = 4;

            for (let i = 0; i < data.length; i += k) {

                this.news.push({ items: data.slice(i, i + k) });
            }
        });
    }
}