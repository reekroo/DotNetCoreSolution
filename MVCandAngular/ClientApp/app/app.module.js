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
import { ProductsFormComponent } from './Components/productsComponent/product-form';
import { ProductListComponent } from './Components/productsComponent/product-list';
import { ProductsEditComponent } from './Components/productsComponent/product-edit';
import { ProductsCreateComponent } from './Components/productsComponent/product-create';
import { ShopProductListComponent } from './Components/shopComponent/product-list';
import { ShopProductDetailsComponent } from './Components/shopComponent/product-details';
import { FullUserComponent } from './Components/fullUserComponent/full-user';
import { UserInfoComponent } from './Components/userComponent/user-information';
import { UserFormComponent } from './Components/userComponent/user-form';
import { UserEditComponent } from './Components/userComponent/user-edit';
import { AddressListComponent } from './Components/addressesComponent/address-list';
import { AddressFormComponent } from './Components/addressesComponent/address-form';
import { AddressCreateComponent } from './Components/addressesComponent/address-create';
import { AddressEditComponent } from './Components/addressesComponent/address-edit';
import { CartProductListComponent } from './Components/cartComponent/cart-product-list';
import { NewsComponent } from './Components/newsComponent/news';
import { BankComponent } from './Components/bankCompoment/bank';
import { ChartComponent } from './Components/chartComponent/chart';
import { MonthRateTableComponent } from './Components/bankCompoment/month-rates-table';
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
    { path: 'bank', component: BankComponent },
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
                BankComponent, ChartComponent, MonthRateTableComponent
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map