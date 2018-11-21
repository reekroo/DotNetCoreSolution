import { Component, Input } from '@angular/core';

import { User } from '../../../Models/Shop/user';

@Component({
    selector: "user-information",
    templateUrl: './user-information.html',
    styleUrls: ['./user.css']
})

export class UserInfoComponent {

    @Input() user: User;

}