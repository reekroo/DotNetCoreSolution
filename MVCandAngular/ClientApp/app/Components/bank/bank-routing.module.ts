import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CurrencyComponent } from './view-controllers/currency-controller';
import { MetalComponent } from './view-controllers/metal-controller';
import { RefinancingComponent } from './view-controllers/refinancing-rate-controller';

const appRoutes: Routes = [

    { path: 'currencies', component: CurrencyComponent },
    { path: 'ingots', component: MetalComponent },
    { path: 'refinancing-rates', component: RefinancingComponent }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class BankRoutingModule { }
