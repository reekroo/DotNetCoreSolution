import { Component, OnInit } from '@angular/core';

import { NashaNivaNewsService } from '../../../Services/data.news.nashaniva.service';

import { News } from '../../../Models/News/news';

@Component({
    templateUrl: './nashaniva-news.html',
    styles: [require('./nashaniva-news.less')],
    providers: [NashaNivaNewsService]
})

export class NashaNivaNewsComponent implements OnInit {

    news: News[];

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