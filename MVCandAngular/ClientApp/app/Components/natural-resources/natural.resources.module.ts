import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {NaturalResourcesRoutingModule } from './natural-resources-routing.module';

import { OilComponent } from './view-controllers/oil-controller';
import { NaturalGasComponent } from './view-controllers/natural-gas-controller';

@NgModule({
    imports: [
        CommonModule,
        NaturalResourcesRoutingModule
    ],
    declarations: [
        OilComponent,
        NaturalGasComponent
    ]
})

export class NaturalResourcesModule { }