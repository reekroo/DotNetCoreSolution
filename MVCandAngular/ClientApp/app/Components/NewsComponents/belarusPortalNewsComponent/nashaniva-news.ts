import { Component, OnInit } from '@angular/core';

import { NashaNivaNewsService } from '../../../Services/data.news.nashaniva.service';

import { News } from '../../../Models/News/news';
import { BaseNewsComponent } from '../base/base-news';

@Component({
    templateUrl: './news-line-section.html',
    styles: [require('./news-line-section.less')],
    providers: [NashaNivaNewsService]
})

export class NashaNivaNewsComponent extends BaseNewsComponent implements OnInit {

    news: News[];
    title = "Nasha Niva";

    constructor(private dataService: NashaNivaNewsService) {
        super();
    }

    ngOnInit() {

        this.getAllNews();
    }
    
    private getAllNews() {

        this.dataService.getNews().subscribe((data: News[]) => { this.news = data; });
    }
}