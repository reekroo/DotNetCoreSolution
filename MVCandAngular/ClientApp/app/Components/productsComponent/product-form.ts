import { Component, Input } from '@angular/core';

import { Product } from '../../Models/product';

@Component({
    selector: "product-form",
    templateUrl: './product-form.html'
})

export class ProductsFormComponent {

    @Input() product: Product;
}