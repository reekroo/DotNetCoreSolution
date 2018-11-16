import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../../Services/data.user.service';

import { User } from '../../Models/user';

@Component({
    templateUrl: './user-edit.html',
    providers: [DataService]
})

export class UserEditComponent implements OnInit {

    id: number;
    location: Location;
    user: User;
    loaded: boolean = false;

    constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute, location: Location) {

        this.location = location;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id) {
            this.dataService.getUser()
            .subscribe((data: User) => {
                this.user = data;
                if (this.user != null) {
                    this.loaded = true;
                }
            });
        }
    }

    save() {
        this.dataService.updateUser(this.user).subscribe(data => this.location.back());
    }

    backClicked() {
        this.location.back();
    }
}