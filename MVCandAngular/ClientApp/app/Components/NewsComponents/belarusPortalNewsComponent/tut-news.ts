import { Component, OnInit } from '@angular/core';

import { TutNewsService } from '../../../Services/data.news.tut.service';

import { BaseSpecificPortalNewsComponent } from '../base/base-specific-portal-news';

@Component({
    templateUrl: './news-clip-board-section.html',
    styles: [require('./news-clip-board-section.less')],
    providers: [TutNewsService]
})

export class TutNewsComponent extends BaseSpecificPortalNewsComponent implements OnInit {

    constructor(specificDataService: TutNewsService) {
        
        super(specificDataService, "TUT");
    }
}