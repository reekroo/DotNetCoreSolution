import { Component, OnInit } from '@angular/core';

import { BelsatNewsService } from '../../../Services/data.news.belsat.service';

import { News } from '../../../Models/News/news';

@Component({
    templateUrl: './news-clip-board-section.html',
    styles: [require('./news-clip-board-section.less')],
    providers: [BelsatNewsService]
})

export class BelsatNewsComponent implements OnInit {

    news: News[];
    title = "Belsat";

    constructor(private dataService: BelsatNewsService) {
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