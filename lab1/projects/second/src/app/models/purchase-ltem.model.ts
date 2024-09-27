import { v4 as uuid } from "uuid";


export class PurchaseItemModel {
    public guid: string = uuid();
    public name?: string;
    public price?: number;
    public isBuy?: boolean;

    constructor(name: string = "", price: number = 0, isBuy: boolean = false) {
        this.name = name;
        this.price = price;
        this.isBuy = isBuy;
    }
}
