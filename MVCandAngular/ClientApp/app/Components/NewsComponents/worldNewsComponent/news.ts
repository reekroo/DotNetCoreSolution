import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../../Services/data.news.service';

import { News } from '../../../Models/News/news';
import { Channel } from '../../../Models/News/channel';

@Component({
    templateUrl: './news.html',
    styles: [require('./news.less')],
    providers: [NewsService]
})

export class NewsComponent implements OnInit {

    news: News[];
    channels: Channel[];

    showError: boolean = false;

    constructor(private dataService: NewsService) {
    }

    ngOnInit() {

        this.getChannels();
        this.getNews();
    }

    getDate(publishedAt: string) {

        return new Date(publishedAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    getNews() {

        this.dataService.getNews().subscribe((data: any) => {

            if (data.articles) {

                this.news = data.articles as News[];
            } else {

                this.news = [];
            }

            this.error();
        });
    }
    
    getNewsById(id:string) {

        this.dataService.getNewsById(id).subscribe(
            response => {

                if (response.hasOwnProperty("articles")) {
                    
                    this.news = response['articles'] as News[];
                } else {

                    this.news = [];
                }

                this.error();
            },
            err => {
                this.news = [];

                this.error();
            }
        )
    }

    getChannels() {

        this.dataService.getChannels().subscribe((data: any) => {

            if (data.sources) {

                this.channels = data.sources as Channel[];
            } else {

                this.channels = [];
            }

        });
    }

    private error() {

        if (this.news.length > 0) {

            this.showError = false;
        } else {

            this.showError = true;
        }

    }
}