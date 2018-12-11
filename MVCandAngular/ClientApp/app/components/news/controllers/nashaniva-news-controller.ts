import { Component, OnInit } from '@angular/core';

import { NashaNivaNewsService } from '../../../services/news/data.news.nashaniva.service';

import { BasePortalNewsComponent } from '../../../shared/bases/news/base-portal-news';

@Component({
    templateUrl: '../views/news-line.html',
    styles: [require('../../../assets/less/news/news-line-section.less')],
    providers: [NashaNivaNewsService]
})

export class NashaNivaNewsComponent extends BasePortalNewsComponent implements OnInit {

    constructor(dataService: NashaNivaNewsService) {

        super(dataService, "Nasha Niva");
    }
}