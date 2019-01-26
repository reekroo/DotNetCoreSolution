import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CurrencyComponent } from './view-controllers/currency-controller';
import { MetalComponent } from './view-controllers/metal-controller';
import { RefinancingComponent } from './view-controllers/refinancing-rate-controller';

import { MonthRateTableComponent } from './view-sections/currency/month-rates-table-section';
import { RateSectionComponent } from './view-sections/currency/rate-section';
import { ConvertorSectionComponent } from './view-sections/currency/convertor-section';
import { DefaultRatesComponent } from './view-sections/currency/default-rates-section';

import { DefaultMetalRatesComponent } from './view-sections/metal/default-metal-section';
import { MetalRatesComponent } from './view-sections/metal/metal-section';

import { RefinancingRateComponent } from './view-sections/refinancing/refinancing-rate-section';
import { RefinancingRatesComponent } from './view-sections/refinancing/refinancing-rates-section';

import { ChartComponent } from '../../shared/components/chart/chart';

const appRoutes: Routes = [

    { path: 'currencies', component: CurrencyComponent },
    { path: 'ingots', component: MetalComponent },
    { path: 'refinancing-rates', component: RefinancingComponent }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ScrollingModule,
        RouterModule.forChild(appRoutes)
    ],
    declarations: [
        
        CurrencyComponent, MonthRateTableComponent, RateSectionComponent, ConvertorSectionComponent, DefaultRatesComponent,
        MetalComponent, DefaultMetalRatesComponent, MetalRatesComponent,
        RefinancingComponent, RefinancingRateComponent, RefinancingRatesComponent,
        ChartComponent
    ]
})

export class BankModule { }