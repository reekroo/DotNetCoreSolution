var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
var appRoutes = [
    { path: 'currencies', component: CurrencyComponent },
    { path: 'ingots', component: MetalComponent },
    { path: 'refinancing-rates', component: RefinancingComponent }
];
var BankModule = /** @class */ (function () {
    function BankModule() {
    }
    BankModule = __decorate([
        NgModule({
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
    ], BankModule);
    return BankModule;
}());
export { BankModule };
//# sourceMappingURL=bank.module.js.map