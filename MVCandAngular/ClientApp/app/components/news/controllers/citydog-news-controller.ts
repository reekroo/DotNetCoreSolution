import { Component, OnInit } from '@angular/core';

import { CityDogNewsService } from '../../../services/news/data.news.citydog.service';

import { BasePortalNewsComponent } from '../../../shared/bases/news/base-portal-news';

@Component({
    templateUrl: '../views/news-line.html',
    styles: [require('../../../assets/less/news/news-line-section.less')],
    providers: [CityDogNewsService]
})

export class CityDogNewsComponent extends BasePortalNewsComponent implements OnInit {

    constructor(specificDataService: CityDogNewsService) {
        
        super(specificDataService, "City Dog");
    }
}