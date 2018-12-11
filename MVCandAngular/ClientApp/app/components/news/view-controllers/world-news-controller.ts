import { Component, OnInit } from '@angular/core';

import { BaseNewsComponent } from '../../../shared/bases/news/base-news';

import { NewsService } from '../../../services/news/data.news.service';

import { News } from '../../../Models/News/news';
import { Channel } from '../../../Models/News/channel';
import { WorldNewsViewModel } from '../view-models/world-news-controller';

@Component({
    templateUrl: './world-news-controller.html',
    styles: [require('../../../assets/less/news/news.less')],
    providers: [NewsService]
})

export class NewsComponent extends BaseNewsComponent implements OnInit {

    worldNewsViewModel: WorldNewsViewModel = new WorldNewsViewModel();

    constructor(private dataService: NewsService) {
        super();
    }

    ngOnInit() {

        this.getChannels();
        this.getNews();
    }
    
    getNews() {

        this.dataService.getNews().subscribe((data: any) => {

            if (data.articles) {

                this.worldNewsViewModel.news = data.articles as News[];
            } else {

                this.worldNewsViewModel.news = [];
            }

            this.error();
        });
    }
    
    getNewsById(id:string) {

        this.dataService.getNewsById(id).subscribe(
            response => {

                if (response.hasOwnProperty("articles")) {
                    
                    this.worldNewsViewModel.news = response['articles'] as News[];
                } else {

                    this.worldNewsViewModel.news = [];
                }

                this.error();
            },
            err => {
                this.worldNewsViewModel.news = [];

                this.error();
            }
        )
    }

    getChannels() {

        this.dataService.getChannels().subscribe((data: any) => {

            if (data.sources) {

                this.worldNewsViewModel.channels = data.sources as Channel[];
            } else {

                this.worldNewsViewModel.channels = [];
            }

        });
    }

    private error() {

        if (this.worldNewsViewModel.news.length > 0) {

            this.worldNewsViewModel.showError = false;
        } else {

            this.worldNewsViewModel.showError = true;
        }
    }
}