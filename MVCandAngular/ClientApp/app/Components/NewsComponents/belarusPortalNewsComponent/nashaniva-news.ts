import { Component, OnInit } from '@angular/core';

import { NashaNivaNewsService } from '../../../Services/data.news.nashaniva.service';

import { BasePortalNewsComponent } from '../base/base-portal-news';

@Component({
    templateUrl: './news-line-section.html',
    styles: [require('./news-line-section.less')],
    providers: [NashaNivaNewsService]
})

export class NashaNivaNewsComponent extends BasePortalNewsComponent implements OnInit {

    constructor(dataService: NashaNivaNewsService) {

        super(dataService, "Nasha Niva");
    }
}