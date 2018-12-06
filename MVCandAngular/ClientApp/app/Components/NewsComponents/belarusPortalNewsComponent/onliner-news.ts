import { Component, OnInit } from '@angular/core';

import { OnlinerNewsService } from '../../../Services/data.news.onliner.service';

import { News } from '../../../Models/News/news';

@Component({
    templateUrl: './onliner-news.html',
    providers: [OnlinerNewsService]
})

export class OnlinerNewsComponent implements OnInit {
    
    peopleNews: { items: News[]; } [] = [];
    techNews: { items: News[]; } [] = [];
    autoNews: { items: News[]; }[] = [];
    realtNews: { items: News[]; }[] = [];
    
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

        people$.subscribe((data: News[]) => {

            let k = 4;

            for (let i = 0; i < data.length; i += k) {

                this.peopleNews.push({ items: data.slice(i, i + k) });
            }
        });

        tech$.subscribe((data: News[]) => {

            let k = 4;

            for (let i = 0; i < data.length; i += k) {

                this.techNews.push({ items: data.slice(i, i + k) });
            }
        });

        auto$.subscribe((data: News[]) => {

            let k = 4;

            for (let i = 0; i < data.length; i += k) {

                this.autoNews.push({ items: data.slice(i, i + k) });
            }
        });

        realt$.subscribe((data: News[]) => {

            let k = 4;

            for (let i = 0; i < data.length; i += k) {

                this.realtNews.push({ items: data.slice(i, i + k) });
            }
        });
    }
}