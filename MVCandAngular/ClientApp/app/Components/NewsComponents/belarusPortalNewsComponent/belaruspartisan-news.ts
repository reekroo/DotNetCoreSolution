import { Component, OnInit } from '@angular/core';

import { BelarusPartisanNewsService } from '../../../Services/data.news.belaruspartisan.service';

import { BasePortalNewsComponent } from '../base/base-portal-news';

@Component({
    templateUrl: './news-line-section.html',
    styles: [require('./news-line-section.less')],
    providers: [BelarusPartisanNewsService]
})

export class BelarusPartisanNewsComponent extends BasePortalNewsComponent implements OnInit {

    constructor(dataService: BelarusPartisanNewsService) {

        super(dataService, "Belarus Partisan");
    }

    ngOnInit() {

        this.getAllNews();
    }  
}