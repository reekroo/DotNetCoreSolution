import { Component, OnInit } from '@angular/core';

import { TutNewsService } from '../../../Services/data.news.tut.service';

import { News } from '../../../Models/News/news';

@Component({
    templateUrl: './tut-news.html',
    providers: [TutNewsService]
})

export class TutNewsComponent implements OnInit {

    news: News[];

    constructor(private dataService: TutNewsService) {
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