import { Component, Input } from '@angular/core';

import { User } from '../../../Models/Shop/user';

@Component({
    selector: "user-form",
    templateUrl: './user-form.html'
})

export class UserFormComponent {

    @Input() user: User;
}