import { Component, OnInit } from '@angular/core';

import { BelsatNewsService } from '../../../services/news/data.news.belsat.service';

import { BasePortalNewsComponent } from '../../../shared/bases/news/base-portal-news';

@Component({
    templateUrl: '../views/news-line.html',
    styles: [require('../../../assets/less/news/news-line-section.less')],
    providers: [BelsatNewsService]
})

export class BelsatNewsComponent extends BasePortalNewsComponent implements OnInit {

    constructor(dataService: BelsatNewsService) {

        super(dataService, "Belsat");
    }
}