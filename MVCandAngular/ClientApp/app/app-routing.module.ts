import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeModule } from './Components/home/home.module';
import { NewsModule } from './Components/news/news.module';
import { BankModule } from './Components/bank/bank.module';
import { NaturalResourcesModule } from './Components/natural-resources/natural.resources.module';
import { WeatherModule } from './Components/weather/weather.module';

const appRoutes: Routes = [

    { path: '', loadChildren: () => HomeModule },
    { path: 'home', loadChildren: () => HomeModule },
    { path: 'index', loadChildren: () => HomeModule },
    { path: 'news', loadChildren: () => NewsModule },
    { path: 'bank', loadChildren: () => BankModule },
    { path: 'natural-resources', loadChildren: () => NaturalResourcesModule },
    { path: 'weather', loadChildren: () => WeatherModule },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
