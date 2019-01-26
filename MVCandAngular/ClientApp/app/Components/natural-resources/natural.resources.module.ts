import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { OilComponent } from './view-controllers/oil-controller';
import { NaturalGasComponent } from './view-controllers/natural-gas-controller';

const appRoutes: Routes = [
    { path: 'oil', component: OilComponent },
    { path: 'gas', component: NaturalGasComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes)
    ],
    declarations: [
        OilComponent,
        NaturalGasComponent
    ]
})

export class NaturalResourcesModule { }