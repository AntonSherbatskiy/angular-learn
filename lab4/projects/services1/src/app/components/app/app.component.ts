import { Component, OnInit } from '@angular/core'
import { Phone } from "../../models/phone.model";
import { DataService } from "../../services/data.service";
import { LogService } from "../../services/log.service";

@Component({
    selector: 'my-app',
    template: `
        <data-comp/>
        <data-comp/>
    `,
    styleUrls: ['./app.component.css'],
    providers: [DataService, LogService],
})
export class AppComponent implements OnInit {
    name: string = '';
    price!: number;
    items: Phone[] = []

    constructor(private dataService: DataService) {
    }

    addItem(name: string, price: number) {
        this.dataService.addData(name, price)
    }

    ngOnInit() {
        this.items = this.dataService.getData()
    }
}
