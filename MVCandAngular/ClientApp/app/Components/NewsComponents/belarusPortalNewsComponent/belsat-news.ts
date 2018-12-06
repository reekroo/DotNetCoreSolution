import { Component, OnInit } from '@angular/core';

import { BelsatNewsService } from '../../../Services/data.news.belsat.service';

import { News } from '../../../Models/News/news';
import { BaseNewsComponent } from '../base/base-news';

@Component({
    templateUrl: './news-line-section.html',
    styles: [require('./news-line-section.less')],
    providers: [BelsatNewsService]
})

export class BelsatNewsComponent extends BaseNewsComponent implements OnInit {

    news: News[];
    title = "Belsat";

    constructor(private dataService: BelsatNewsService) {
        super();
    }

    ngOnInit() {

        this.getAllNews();
    }
    
    private getAllNews() {

        this.dataService.getNews().subscribe((data: News[]) => { this.news = data; });
    }    
}