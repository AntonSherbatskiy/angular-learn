import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { PurchaseItemComponent } from './components/purchase-list/purchase-item/purchase-item.component';
import { AppComponent } from "./components/app.component";

@NgModule({
    declarations: [
        AppComponent,
        PurchaseListComponent,
        PurchaseItemComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
