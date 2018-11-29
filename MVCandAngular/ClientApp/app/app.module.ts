import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './Components/appComponent/app.head';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { ProductsFormComponent } from './Components/ShopComponents/productsComponent/product-form';
import { ProductListComponent } from './Components/ShopComponents/productsComponent/product-list';
import { ProductsEditComponent } from './Components/ShopComponents/productsComponent/product-edit';
import { ProductsCreateComponent } from './Components/ShopComponents/productsComponent/product-create';

import { ShopProductListComponent } from './Components/ShopComponents/shopComponent/product-list';
import { ShopProductDetailsComponent } from './Components/ShopComponents/shopComponent/product-details';

import { FullUserComponent } from './Components/ShopComponents/fullUserComponent/full-user';
import { UserInfoComponent } from './Components/ShopComponents/userComponent/user-information';
import { UserFormComponent } from './Components/ShopComponents/userComponent/user-form';
import { UserEditComponent } from './Components/ShopComponents/userComponent/user-edit';

import { AddressListComponent } from './Components/ShopComponents/addressesComponent/address-list';
import { AddressFormComponent } from './Components/ShopComponents/addressesComponent/address-form';
import { AddressCreateComponent } from './Components/ShopComponents/addressesComponent/address-create';
import { AddressEditComponent } from './Components/ShopComponents/addressesComponent/address-edit';

import { CartProductListComponent } from './Components/ShopComponents/cartComponent/cart-product-list';

import { NewsComponent } from './Components/NewsComponents/newsComponent/news';
import { OnlinerNewsComponent } from './Components/NewsComponents/newsComponent/onlinerNews';
import { NewsSectionComponent } from './Components/NewsComponents/newsComponent/news-section';


import { CurrencyComponent } from './Components/BankComponents/currencyCompoment/currency';
import { MonthRateTableComponent } from './Components/BankComponents/currencyCompoment/month-rates-table-section';
import { RateSectionComponent } from './Components/BankComponents/currencyCompoment/rate-section';
import { ConvertorSectionComponent } from './Components/BankComponents/currencyCompoment/convertor-section';
import { DefaultRatesComponent } from './Components/BankComponents/currencyCompoment/default-rates-section';
import { MetalComponent } from './Components/BankComponents/metalComponent/metal';
import { DefaultMetalRatesComponent } from './Components/BankComponents/metalComponent/default-metal-section';
import { MetalRatesComponent } from './Components/BankComponents/metalComponent/metal-section';
import { RefinancingComponent } from './Components/BankComponents/refinancingComponent/refinancing-rate';
import { RefinancingRateComponent } from './Components/BankComponents/refinancingComponent/refinancing-rate-section';
import { RefinancingRatesComponent } from './Components/BankComponents/refinancingComponent/refinancing-rates-section';
import { ChartComponent } from './Components/BankComponents/chartComponent/chart';

import { OilComponent } from './Components/OilComponents/oilComponent/oil'

const appRoutes: Routes = [

    { path: 'shop', component: ShopProductListComponent },
    { path: 'shop/:id', component: ShopProductDetailsComponent },

    { path: 'products', component: ProductListComponent },
    { path: 'products/create', component: ProductsCreateComponent },
    { path: 'products/edit/:id', component: ProductsEditComponent },

    { path: 'user', component: FullUserComponent },
    { path: 'user/edit/:id', component: UserEditComponent },
    { path: 'user/address/create', component: AddressCreateComponent },
    { path: 'user/address/edit/:id', component: AddressEditComponent },

    { path: 'news', component: NewsComponent },
    { path: 'news/onliner', component: OnlinerNewsComponent },
    { path: 'oil', component: OilComponent },

    { path: 'bank/currencies', component: CurrencyComponent },
    { path: 'bank/ingots', component: MetalComponent },
    { path: 'bank/refinancing-rates', component: RefinancingComponent },

    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        ScrollingModule
    ],
    declarations: [
        AppComponent,

        ProductListComponent, ProductsEditComponent, ProductsFormComponent, ProductsCreateComponent,
        ShopProductDetailsComponent, ShopProductListComponent,
        FullUserComponent, UserFormComponent, UserInfoComponent, UserEditComponent,
        AddressListComponent, AddressFormComponent, AddressCreateComponent, AddressEditComponent,
        CartProductListComponent,

        NewsComponent, OnlinerNewsComponent, NewsSectionComponent,
        ChartComponent,
        CurrencyComponent, MonthRateTableComponent, RateSectionComponent, ConvertorSectionComponent, DefaultRatesComponent,
        MetalComponent, DefaultMetalRatesComponent, MetalRatesComponent,
        RefinancingComponent, RefinancingRateComponent, RefinancingRatesComponent,
        OilComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }