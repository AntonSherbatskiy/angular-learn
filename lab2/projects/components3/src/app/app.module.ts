import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent } from './components/app/child/child.component';
import { AppComponent } from "./components/app/app.component";
import { FormsModule } from "@angular/forms";

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
