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
import { AppComponent } from './Components/appComponent/app.head';
import { ProductsFormComponent } from './Components/Shop/productsComponent/product-form';
import { ProductListComponent } from './Components/Shop/productsComponent/product-list';
import { ProductsEditComponent } from './Components/Shop/productsComponent/product-edit';
import { ProductsCreateComponent } from './Components/Shop/productsComponent/product-create';
import { ShopProductListComponent } from './Components/Shop/shopComponent/product-list';
import { ShopProductDetailsComponent } from './Components/Shop/shopComponent/product-details';
import { FullUserComponent } from './Components/Shop/fullUserComponent/full-user';
import { UserInfoComponent } from './Components/Shop/userComponent/user-information';
import { UserFormComponent } from './Components/Shop/userComponent/user-form';
import { UserEditComponent } from './Components/Shop/userComponent/user-edit';
import { AddressListComponent } from './Components/Shop/addressesComponent/address-list';
import { AddressFormComponent } from './Components/Shop/addressesComponent/address-form';
import { AddressCreateComponent } from './Components/Shop/addressesComponent/address-create';
import { AddressEditComponent } from './Components/Shop/addressesComponent/address-edit';
import { CartProductListComponent } from './Components/Shop/cartComponent/cart-product-list';
import { NewsComponent } from './Components/News/newsComponent/news';
import { BankComponent } from './Components/Bank/bankCompoment/bank';
import { ChartComponent } from './Components/Bank/chartComponent/chart';
import { MonthRateTableComponent } from './Components/Bank/bankCompoment/month-rates-table';
import { RateSectionComponent } from './Components/Bank/bankCompoment/rate-section';
import { ConvertorSectionComponent } from './Components/Bank/bankCompoment/convertor-section';
import { DefaultRatesComponent } from './Components/Bank/bankCompoment/default-rates-section';
import { MetalComponent } from './Components/Bank/metalComponent/metal';
import { DefaultMetalRatesComponent } from './Components/Bank/metalComponent/default-metal-section';
import { MetalRatesComponent } from './Components/Bank/metalComponent/metal-section';
import { MetalChartComponent } from './Components/Bank/chartComponent/metalChart';
import { RefinancingComponent } from './Components/Bank/refinancingComponent/refinancing-rate';
import { RefinancingRateComponent } from './Components/Bank/refinancingComponent/refinancing-rate-section';
import { RefinancingRatesComponent } from './Components/Bank/refinancingComponent/refinancing-rates-section';
import { OilComponent } from './Components/Oil/oilComponent/oil';
var appRoutes = [
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
    { path: 'bank/currencies', component: BankComponent },
    { path: 'bank/ingots', component: MetalComponent },
    { path: 'bank/refinancing-rates', component: RefinancingComponent },
    { path: 'oil', component: OilComponent },
    { path: '**', redirectTo: '/' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
            declarations: [
                AppComponent,
                ProductListComponent, ProductsEditComponent, ProductsFormComponent, ProductsCreateComponent,
                NewsComponent,
                ShopProductDetailsComponent, ShopProductListComponent,
                FullUserComponent, UserFormComponent, UserInfoComponent, UserEditComponent,
                AddressListComponent, AddressFormComponent, AddressCreateComponent, AddressEditComponent,
                CartProductListComponent,
                BankComponent, ChartComponent, MonthRateTableComponent, RateSectionComponent, ConvertorSectionComponent, DefaultRatesComponent,
                MetalComponent, MetalChartComponent, DefaultMetalRatesComponent, MetalRatesComponent,
                RefinancingComponent, RefinancingRateComponent, RefinancingRatesComponent,
                OilComponent
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map