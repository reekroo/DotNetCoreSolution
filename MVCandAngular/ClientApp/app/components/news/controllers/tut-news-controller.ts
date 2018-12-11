import { Component, OnInit } from '@angular/core';

import { TutNewsService } from '../../../services/news/data.news.tut.service';

import { BaseSpecificPortalNewsComponent } from '../../../shared/bases/news/base-specific-portal-news';

@Component({
    templateUrl: '../views/news-clip-board.html',
    styles: [require('../../../assets/less/news/news-clip-board-section.less')],
    providers: [TutNewsService]
})

export class TutNewsComponent extends BaseSpecificPortalNewsComponent implements OnInit {

    constructor(specificDataService: TutNewsService) {
        
        super(specificDataService, "TUT");
    }
}