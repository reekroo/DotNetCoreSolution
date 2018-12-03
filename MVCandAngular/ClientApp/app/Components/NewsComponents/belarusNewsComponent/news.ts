import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { OnlinerNewsService } from '../../../Services/data.news.onliner.service';
import { TutNewsService } from '../../../Services/data.news.tut.service';
import { BelarusPartisanNewsService } from '../../../Services/data.news.belaruspartisan.service';
import { NashaNivaNewsService } from '../../../Services/data.news.nashaniva.service';

import { News } from '../../../Models/News/news';

@Component({
    templateUrl: './news.html',
    providers: [OnlinerNewsService, TutNewsService, BelarusPartisanNewsService, NashaNivaNewsService]
})

export class BelNewsComponent implements OnInit {

    onlinerNews: News[];
    tutNews: News[];
    belarusPartisanNews: News[];
    nashaNivaNews: News[];

    showError: boolean = false;

    constructor(
        private onliner: OnlinerNewsService,
        private tut: TutNewsService,
        private belarusPartisan: BelarusPartisanNewsService,
        private nashaNiva: NashaNivaNewsService) {
    }

    ngOnInit() {

        this.getNews();
    }

    getDate(publishedAt: string) {

        return new Date(publishedAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    getNews() {

        let auto$ = this.onliner.getAutoNews();
        let people$ = this.onliner.getPeopleNews();
        let realt$ = this.onliner.getRealtNews();
        let tech$ = this.onliner.getTechNews();
        
        combineLatest(auto$, people$, realt$, tech$).subscribe(combinedResult => {

            let arr = [];

            arr.push(combinedResult[0][0]);
            arr.push(combinedResult[0][1]);
            
            arr.push(combinedResult[1][0]);
            arr.push(combinedResult[1][1]);

            arr.push(combinedResult[2][0]);
            arr.push(combinedResult[2][1]);

            arr.push(combinedResult[3][0]);
            arr.push(combinedResult[3][1]);
            
            this.onlinerNews = arr as News[];
        });

        this.tut.getNews().subscribe((data: News[]) => {
            this.tutNews = data.slice(0, 8);
        });

        this.belarusPartisan.getNews().subscribe((data: News[]) => {
            this.belarusPartisanNews = data.slice(0, 8);
        });

        this.nashaNiva.getNews().subscribe((data: News[]) => {
            this.nashaNivaNews = data.slice(0, 8);
        });
    }
}