var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.head';
import { ScrollingModule } from '@angular/cdk/scrolling';
//import { ProductsFormComponent } from './Components/ShopComponents/productsComponent/product-form';
//import { ProductListComponent } from './Components/ShopComponents/productsComponent/product-list';
//import { ProductsEditComponent } from './Components/ShopComponents/productsComponent/product-edit';
//import { ProductsCreateComponent } from './Components/ShopComponents/productsComponent/product-create';
//import { ShopProductListComponent } from './Components/ShopComponents/shopComponent/product-list';
//import { ShopProductDetailsComponent } from './Components/ShopComponents/shopComponent/product-details';
//import { FullUserComponent } from './Components/ShopComponents/fullUserComponent/full-user';
//import { UserInfoComponent } from './Components/ShopComponents/userComponent/user-information';
//import { UserFormComponent } from './Components/ShopComponents/userComponent/user-form';
//import { UserEditComponent } from './Components/ShopComponents/userComponent/user-edit';
//import { AddressListComponent } from './Components/ShopComponents/addressesComponent/address-list';
//import { AddressFormComponent } from './Components/ShopComponents/addressesComponent/address-form';
//import { AddressCreateComponent } from './Components/ShopComponents/addressesComponent/address-create';
//import { AddressEditComponent } from './Components/ShopComponents/addressesComponent/address-edit';
//import { CartProductListComponent } from './Components/ShopComponents/cartComponent/cart-product-list';
import { ChartComponent } from './shared/components/chart/chart';
import { NewsComponent } from './components/news/view-controllers/world-news-controller';
import { BelNewsComponent } from './components/news/view-controllers/belarus-news-controller';
import { OnlinerNewsComponent } from './components/news/controllers/onliner-news-controller';
import { TutNewsComponent } from './components/news/controllers/tut-news-controller';
import { BelarusPartisanNewsComponent } from './components/news/controllers/belaruspartisan-news-controller';
import { NashaNivaNewsComponent } from './components/news/controllers/nashaniva-news-controller';
import { BelsatNewsComponent } from './components/news/controllers/belsat-news-controller';
import { SvobodaNewsComponent } from './components/news/controllers/svoboda-news-controller';
import { CityDogNewsComponent } from './components/news/controllers/citydog-news-controller';
import { NewsSectionComponent } from './components/news/view-sections/belarus-news/news-section';
import { SpecificNewsSectionComponent } from './components/news/view-sections/belarus-news/specific-news-section';
import { OnlinerNewsSectionComponent } from './components/news//view-sections/belarus-portal-news/onliner-news-section';
import { CurrencyComponent } from './components/bank/view-controllers/currency-controller';
import { MetalComponent } from './components/bank/view-controllers/metal-controller';
import { RefinancingComponent } from './components/bank/view-controllers/refinancing-rate-controller';
import { MonthRateTableComponent } from './components/bank/view-sections/currency/month-rates-table-section';
import { RateSectionComponent } from './components/bank/view-sections/currency/rate-section';
import { ConvertorSectionComponent } from './components/bank/view-sections/currency/convertor-section';
import { DefaultRatesComponent } from './components/bank/view-sections/currency/default-rates-section';
import { DefaultMetalRatesComponent } from './components/bank/view-sections/metal/default-metal-section';
import { MetalRatesComponent } from './components/bank/view-sections/metal/metal-section';
import { RefinancingRateComponent } from './components/bank/view-sections/refinancing/refinancing-rate-section';
import { RefinancingRatesComponent } from './components/bank/view-sections/refinancing/refinancing-rates-section';
import { OilComponent } from './components/oil/view-controllers/oil-controller';
import { NaturalGasComponent } from './components/natural-gas/view-controllers/natural-gas-controller';
var appRoutes = [
    //{ path: 'shop', component: ShopProductListComponent },
    //{ path: 'shop/:id', component: ShopProductDetailsComponent },
    //{ path: 'products', component: ProductListComponent },
    //{ path: 'products/create', component: ProductsCreateComponent },
    //{ path: 'products/edit/:id', component: ProductsEditComponent },
    //{ path: 'user', component: FullUserComponent },
    //{ path: 'user/edit/:id', component: UserEditComponent },
    //{ path: 'user/address/create', component: AddressCreateComponent },
    //{ path: 'user/address/edit/:id', component: AddressEditComponent },
    { path: 'news/world', component: NewsComponent },
    { path: 'news/belarus', component: BelNewsComponent },
    { path: 'news/onliner', component: OnlinerNewsComponent },
    { path: 'news/citydog', component: CityDogNewsComponent },
    { path: 'news/tut', component: TutNewsComponent },
    { path: 'news/belarus-partisan', component: BelarusPartisanNewsComponent },
    { path: 'news/nasha-niva', component: NashaNivaNewsComponent },
    { path: 'news/belsat', component: BelsatNewsComponent },
    { path: 'news/svoboda', component: SvobodaNewsComponent },
    { path: 'bank/currencies', component: CurrencyComponent },
    { path: 'bank/ingots', component: MetalComponent },
    { path: 'bank/refinancing-rates', component: RefinancingComponent },
    { path: 'oil', component: OilComponent },
    { path: 'gas', component: NaturalGasComponent },
    { path: '**', redirectTo: '/' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                FormsModule,
                HttpClientModule,
                RouterModule.forRoot(appRoutes),
                ScrollingModule
            ],
            declarations: [
                AppComponent,
                //ProductListComponent, ProductsEditComponent, ProductsFormComponent, ProductsCreateComponent,
                //ShopProductDetailsComponent, ShopProductListComponent,
                //FullUserComponent, UserFormComponent, UserInfoComponent, UserEditComponent,
                //AddressListComponent, AddressFormComponent, AddressCreateComponent, AddressEditComponent,
                //CartProductListComponent,
                NewsComponent, BelNewsComponent,
                OnlinerNewsComponent, TutNewsComponent, CityDogNewsComponent,
                BelarusPartisanNewsComponent, NashaNivaNewsComponent, BelsatNewsComponent, SvobodaNewsComponent,
                NewsSectionComponent, SpecificNewsSectionComponent, OnlinerNewsSectionComponent,
                CurrencyComponent, MonthRateTableComponent, RateSectionComponent, ConvertorSectionComponent, DefaultRatesComponent,
                MetalComponent, DefaultMetalRatesComponent, MetalRatesComponent,
                RefinancingComponent, RefinancingRateComponent, RefinancingRatesComponent,
                ChartComponent,
                OilComponent, NaturalGasComponent
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map