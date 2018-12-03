﻿import { Component, OnInit } from '@angular/core';

import { BelarusPartisanNewsService } from '../../../Services/data.news.belaruspartisan.service';

import { News } from '../../../Models/News/news';

@Component({
    templateUrl: './belaruspartisan-news.html',
    providers: [BelarusPartisanNewsService]
})

export class BelarusPartisanNewsComponent implements OnInit {

    news: News[];

    constructor(private dataService: BelarusPartisanNewsService) {
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