import { Component, OnInit } from '@angular/core';

import { SvobodaNewsService } from '../../../Services/data.news.svoboda.service';

import { BaseSpecificPortalNewsComponent } from '../base/base-specific-portal-news';

@Component({
    templateUrl: './news-clip-board-section.html',
    styles: [require('./news-clip-board-section.less')],
    providers: [SvobodaNewsService]
})

export class SvobodaNewsComponent extends BaseSpecificPortalNewsComponent implements OnInit {
        
    constructor(specificDataService: SvobodaNewsService) {

        super(specificDataService, "Radio Svoboda");
    }
}