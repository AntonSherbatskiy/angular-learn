import { Component, ElementRef, ViewChild } from '@angular/core';
import { PurchaseItemModel } from "../../models/purchase-ltem.model";

@Component({
    selector: 'app-purchase-list',
    templateUrl: './purchase-list.component.html',
    styleUrl: './purchase-list.component.css'
})
export class PurchaseListComponent {
    protected products: PurchaseItemModel[] = [
        new PurchaseItemModel("test 1", 999)
    ];

    @ViewChild("name") protected nameInput?: ElementRef;
    @ViewChild("price") protected priceInput?: ElementRef;

    protected add = (name: string, price: number) => {
        if (price <= 0) {
            alert("Cannot add product with price 0!");
            return;
        }

        this.products.push(new PurchaseItemModel(name, price, false));
        this.nameInput!.nativeElement.value = "";
        this.priceInput!.nativeElement.value = 0;
    }

    protected remove = (item: PurchaseItemModel) => {
        this.products = this.products.filter(p => p.guid !== item.guid);
    }
}
