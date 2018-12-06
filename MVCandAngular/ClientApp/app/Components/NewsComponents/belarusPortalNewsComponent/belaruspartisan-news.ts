import { Component, OnInit } from '@angular/core';

import { BelarusPartisanNewsService } from '../../../Services/data.news.belaruspartisan.service';

import { News } from '../../../Models/News/news';
import { BaseNewsComponent } from '../base/base-news';

@Component({
    templateUrl: './news-line-section.html',
    styles: [require('./news-line-section.less')],
    providers: [BelarusPartisanNewsService]
})

export class BelarusPartisanNewsComponent extends BaseNewsComponent implements OnInit {

    news: News[];
    title = "Belarus Partisan";

    constructor(private dataService: BelarusPartisanNewsService) {
        super();
    }

    ngOnInit() {

        this.getAllNews();
    }
    
    private getAllNews() {

        this.dataService.getNews().subscribe((data: News[]) => { this.news = data; });
    }        
}