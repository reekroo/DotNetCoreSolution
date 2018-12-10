import { Component, OnInit } from '@angular/core';

import { BelsatNewsService } from '../../../Services/data.news.belsat.service';

import { BasePortalNewsComponent } from '../base/base-portal-news';

@Component({
    templateUrl: './news-line-section.html',
    styles: [require('./news-line-section.less')],
    providers: [BelsatNewsService]
})

export class BelsatNewsComponent extends BasePortalNewsComponent implements OnInit {

    constructor(dataService: BelsatNewsService) {

        super(dataService, "Belsat");
    }
}