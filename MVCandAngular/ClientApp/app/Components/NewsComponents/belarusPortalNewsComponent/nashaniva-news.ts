import { Component, OnInit } from '@angular/core';

import { NashaNivaNewsService } from '../../../Services/data.news.nashaniva.service';

import { News } from '../../../Models/News/news';

@Component({
    templateUrl: './news-clip-board-section.html',
    styles: [require('./news-clip-board-section.less')],
    providers: [NashaNivaNewsService]
})

export class NashaNivaNewsComponent implements OnInit {

    news: News[];
    title = "Nasha Niva";

    constructor(private dataService: NashaNivaNewsService) {
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