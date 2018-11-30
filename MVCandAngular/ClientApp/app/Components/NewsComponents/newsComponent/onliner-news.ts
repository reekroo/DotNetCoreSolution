import { Component, OnInit } from '@angular/core';

import { OnlinerNewsService } from '../../../Services/data.news.onliner.service';

import { News } from '../../../Models/News/news';

@Component({
    templateUrl: './onliner-news.html',
    providers: [OnlinerNewsService]
})

export class OnlinerNewsComponent implements OnInit {

    peopleNews: News[];
    techNews: News[];
    autoNews: News[];
    realtNews: News[];

    constructor(private dataService: OnlinerNewsService) {
    }

    ngOnInit() {

        this.getAllNews();
    }
    
    private getAllNews() {

        let people$ = this.dataService.getPeopleNews();
        let tech$ = this.dataService.getTechNews();
        let auto$ = this.dataService.getAutoNews();
        let realt$ = this.dataService.getRealtNews();

        people$.subscribe((data: News[]) => { this.peopleNews = data; });
        tech$.subscribe((data: News[]) => { this.techNews = data; });
        auto$.subscribe((data: News[]) => { this.autoNews = data; });
        realt$.subscribe((data: News[]) => { this.realtNews = data; });
    }
    
}