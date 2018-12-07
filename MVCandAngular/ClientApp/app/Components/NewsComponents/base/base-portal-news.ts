import { BaseNewsComponent } from "./base-news";

import { INewsService } from '../../../Services/Interfaces/INewsServce'
import { News } from "../../../Models/News/news";

class BasePortalNewsComponent extends BaseNewsComponent{

    news: Object;
    title: string;

    constructor(private dataService: INewsService, title: string) {
        super();

        this.title = title;
    }

    getAllNews() {

        this.dataService.getNews().subscribe((data: News[]) => { this.news = data; });
    }    
}

export { BasePortalNewsComponent };