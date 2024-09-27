import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PurchaseItemModel } from "../../../models/purchase-ltem.model";

@Component({
    selector: 'app-purchase-item',
    templateUrl: './purchase-item.component.html',
    styleUrl: './purchase-item.component.css'
})
export class PurchaseItemComponent {
    @Input() public purchaseItem: PurchaseItemModel = new PurchaseItemModel();

    @Output() public onBuyEvent: EventEmitter<PurchaseItemModel> = new EventEmitter<PurchaseItemModel>();
    @Output() public onDeleteEvent: EventEmitter<PurchaseItemModel> = new EventEmitter<PurchaseItemModel>();

    protected buy = () => {
        this.purchaseItem.isBuy = !this.purchaseItem.isBuy;
        this.onBuyEvent.emit(this.purchaseItem);
    }

    protected delete = () => {
        this.onDeleteEvent.emit(this.purchaseItem);
    }
}
