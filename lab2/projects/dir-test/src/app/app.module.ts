import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./components/app/app.component";
import { BgDirective } from './directives/bg.directive';
import { DisablemeDirective } from './directives/disableme.directive';
import { MyStyleDirective } from './directives/my-style.directive';

@NgModule({
    declarations: [
        AppComponent,
        BgDirective,
        DisablemeDirective,
        MyStyleDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
