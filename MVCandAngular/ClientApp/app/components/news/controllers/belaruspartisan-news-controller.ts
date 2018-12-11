import { Component, OnInit } from '@angular/core';

import { BelarusPartisanNewsService } from '../../../services/news/data.news.belaruspartisan.service';

import { BasePortalNewsComponent } from '../../../shared/bases/news/base-portal-news';

@Component({
    templateUrl: '../views/news-line.html',
    styles: [require('../../../assets/less/news/news-line-section.less')],
    providers: [BelarusPartisanNewsService]
})

export class BelarusPartisanNewsComponent extends BasePortalNewsComponent implements OnInit {

    constructor(dataService: BelarusPartisanNewsService) {

        super(dataService, "Belarus Partisan");
    }
}