import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./components/app/app.component";
import { FormsModule } from "@angular/forms";
import { ChildComponent } from "./components/app/child/child.component";

@NgModule({
    declarations: [
        AppComponent,
        ChildComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
