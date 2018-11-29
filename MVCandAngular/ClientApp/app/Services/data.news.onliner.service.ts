import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class OnlinerNewsService {

    private url = "/api/news";

    constructor(private http: HttpClient) { }

    getPeopleNews() {

        return this.http.get(this.url + '/people');
    };

    getAutoNews() {

        return this.http.get(this.url + '/auto');
    };

    getTechNews() {

        return this.http.get(this.url + '/tech');
    };

    getRealtNews() {

        return this.http.get(this.url + '/realt');
    };
}