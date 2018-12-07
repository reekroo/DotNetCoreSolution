import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { INewsService } from './Interfaces/INewsServce'

@Injectable()

export class SvobodaNewsService implements INewsService {

    private url = "/api/news";

    constructor(private http: HttpClient) { }

    getNews() {

        return this.http.get(this.url + '/svoboda');
    };

}