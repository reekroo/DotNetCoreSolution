import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BelsatNewsService {

    private url = "/api/news";

    constructor(private http: HttpClient) { }

    getNews() {

        return this.http.get(this.url + '/belsat');
    };

}