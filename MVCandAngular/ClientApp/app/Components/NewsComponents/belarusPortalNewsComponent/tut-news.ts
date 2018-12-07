import { Component, OnInit } from '@angular/core';

import { TutNewsService } from '../../../Services/data.news.tut.service';

import { News } from '../../../Models/News/news';
import { BasePortalNewsComponent } from '../base/base-portal-news';

@Component({
    templateUrl: './news-clip-board-section.html',
    styles: [require('./news-clip-board-section.less')],
    providers: [TutNewsService]
})

export class TutNewsComponent extends BasePortalNewsComponent implements OnInit {

    newsRows: { items: News[]; }[] = [];

    constructor(private specificDataService: TutNewsService) {
        
        super(specificDataService, "TUT");
    }

    ngOnInit() {

        this.getAllNews();
    }
    
    getAllNews() {

        this.specificDataService.getNews().subscribe((data: News[]) => {

            let k = 4;

            for (let i = 0; i < data.length; i += k) {
                
                this.newsRows.push({ items: data.slice(i, i + k) });

                this.news = this.newsRows;
            }
        });
    }
}