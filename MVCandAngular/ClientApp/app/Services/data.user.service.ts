import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../Models/Shop/user';

@Injectable()

export class DataService {

    private url = "/api/user";

    constructor(private http: HttpClient) { }

    getUser() {
        return this.http.get(this.url);
    }

    updateUser(user: User) {
        return this.http.put(this.url + '/' + user.id, user);
    }
}