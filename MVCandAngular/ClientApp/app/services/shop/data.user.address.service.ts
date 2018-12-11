import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Address } from '../../models/shop/address';

@Injectable()

export class UserAddressDataService {

    private url = "/api/address";

    constructor(private http: HttpClient) { }
    
    getAddresses() {
        return this.http.get(this.url);
    }

    getAddress(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createAddress(address: Address) {
        return this.http.post(this.url, address);
    }

    updateAddress(address: Address) {
        return this.http.put(this.url + '/' + address.id, address);
    }
    
    removeAddress(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}