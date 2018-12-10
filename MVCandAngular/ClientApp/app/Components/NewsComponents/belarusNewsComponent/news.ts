import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { BelsatNewsService } from '../../../Services/data.news.belsat.service';
import { OnlinerNewsService } from '../../../Services/data.news.onliner.service';
import { TutNewsService } from '../../../Services/data.news.tut.service';
import { SvobodaNewsService } from '../../../Services/data.news.svoboda.service';
import { NashaNivaNewsService } from '../../../Services/data.news.nashaniva.service';
import { BelarusPartisanNewsService } from '../../../Services/data.news.belaruspartisan.service';

import { News } from '../../../Models/News/news';

@Component({
    templateUrl: './news.html',
    providers: [OnlinerNewsService, TutNewsService, BelarusPartisanNewsService, NashaNivaNewsService, BelsatNewsService, SvobodaNewsService]
})

export class BelNewsComponent implements OnInit {

    onlinerNews: News[];
    tutNews: News[];
    belarusPartisanNews: News[];
    nashaNivaNews: News[];
    belsatNews: News[];
    svobodaNews: News[];

    interval: any;

    constructor(
        private onliner: OnlinerNewsService,
        private tut: TutNewsService,
        private belarusPartisan: BelarusPartisanNewsService,
        private nashaNiva: NashaNivaNewsService,
        private belsat: BelsatNewsService,
        private svoboda: SvobodaNewsService) {

    }

    ngOnInit() {

        this.getNews();

        this.interval = setInterval(() => {

            this.getNews();
        }, 60000);
    }
    
    ngOnDestroy() {
        if (this.interval) {

            clearInterval(this.interval);
        }
    }

    getNews() {

        this.belsat.getNews().subscribe((data: News[]) => { this.belsatNews = data.slice(0, 4); });

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

        this.tut.getNews().subscribe((data: News[]) => { this.tutNews = data.slice(0, 8); });

        this.svoboda.getNews().subscribe((data: News[]) => { this.svobodaNews = data.slice(0, 8); });
        
        this.nashaNiva.getNews().subscribe((data: News[]) => { this.nashaNivaNews = data.slice(0, 8); });

        this.belarusPartisan.getNews().subscribe((data: News[]) => { this.belarusPartisanNews = data.slice(0, 6); });
    }    
}