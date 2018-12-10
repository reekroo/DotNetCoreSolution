﻿import { BaseNewsComponent } from "./base-news";

import { INewsService } from '../../../Services/Interfaces/INewsServce'

import { IBaseNewsPinger } from '../interfaces/IBaseNewsPinger'
import { IBaseNews } from '../interfaces/IBaseNews'

import { News } from "../../../Models/News/news";

class BasePortalNewsComponent extends BaseNewsComponent implements IBaseNews, IBaseNewsPinger{

    news: Object;
    title: string;

    interval: any;

    constructor(private dataService: INewsService, title: string) {
        super();

        this.title = title;
    }
    
    ngOnInit() {

        this.getAllNews();

        this.interval = setInterval(() => {

            this.getAllNews();
        }, 60000);
    }
    
    ngOnDestroy() {
        if (this.interval) {

            clearInterval(this.interval);
        }
    }

    getAllNews() {

        this.dataService.getNews().subscribe((data: News[]) => { this.news = data; });
    }    
}

export { BasePortalNewsComponent };