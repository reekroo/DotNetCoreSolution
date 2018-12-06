import { Component, OnInit } from '@angular/core';

import { TutNewsService } from '../../../Services/data.news.tut.service';

import { News } from '../../../Models/News/news';
import { BaseNewsComponent } from '../base/base-news';

@Component({
    templateUrl: './news-clip-board-section.html',
    styles: [require('./news-clip-board-section.less')],
    providers: [TutNewsService]
})

export class TutNewsComponent extends BaseNewsComponent implements OnInit {

    news: { items: News[]; }[] = [];
    title = "TUT";

    constructor(private dataService: TutNewsService) {
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