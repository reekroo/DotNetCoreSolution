import { Component, OnInit } from '@angular/core';

import { SvobodaNewsService } from '../../../Services/data.news.svoboda.service';

import { News } from '../../../Models/News/news';

@Component({
    templateUrl: './news-line-section.html',
    styles: [require('./news-line-section.less')],
    providers: [SvobodaNewsService]
})

export class SvobodaNewsComponent implements OnInit {

    news: News[];
    title = "Radio Svoboda";

    constructor(private dataService: SvobodaNewsService) {
    }

    ngOnInit() {

        this.getAllNews();
    }
    
    private getAllNews() {

        this.dataService.getNews().subscribe((data: News[]) => { this.news = data; });
    }
    
    getDate(publishedAt: string) {

        return new Date(publishedAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    }
    
}