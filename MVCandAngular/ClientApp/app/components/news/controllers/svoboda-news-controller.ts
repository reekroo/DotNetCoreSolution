import { Component, OnInit } from '@angular/core';

import { SvobodaNewsService } from '../../../services/news/data.news.svoboda.service';

import { BaseSpecificPortalNewsComponent } from '../../../shared/bases/news/base-specific-portal-news';

@Component({
    templateUrl: '../views/news-block.html',
    styles: [require('../../../assets/less/news/news-block-section.less')],
    providers: [SvobodaNewsService]
})

export class SvobodaNewsComponent extends BaseSpecificPortalNewsComponent implements OnInit {
        
    constructor(specificDataService: SvobodaNewsService) {

        super(specificDataService, "Radio Svoboda");
    }
}