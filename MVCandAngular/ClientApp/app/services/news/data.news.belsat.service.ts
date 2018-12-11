import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { INewsService } from '../../shared/interfaces/services/news-service'

@Injectable()

export class BelsatNewsService implements INewsService {

    private url = "/api/news";

    constructor(private http: HttpClient) { }

    getNews() {

        return this.http.get(this.url + '/belsat');
    };

}