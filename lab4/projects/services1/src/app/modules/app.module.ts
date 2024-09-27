import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "../components/app/app.component";
import { FormsModule } from "@angular/forms";
import { DataComponent } from "../components/data/data.component";
import { DataService } from "../services/data.service";
import { LogService } from "../services/log.service";

@NgModule({
    declarations: [
        AppComponent,
        DataComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [DataService, LogService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
