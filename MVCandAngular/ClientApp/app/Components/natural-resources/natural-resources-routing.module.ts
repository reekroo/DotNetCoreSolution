import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { OilComponent } from './view-controllers/oil-controller';
import { NaturalGasComponent } from './view-controllers/natural-gas-controller';

const appRoutes: Routes = [

    { path: 'oil', component: OilComponent },
    { path: 'gas', component: NaturalGasComponent }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class NaturalResourcesRoutingModule { }
