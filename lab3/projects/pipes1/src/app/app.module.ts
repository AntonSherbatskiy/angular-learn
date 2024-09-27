import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { FormatPipe } from './pipes/format.pipe';
import { JoinPipe } from './pipes/join.pipe';
import { SqrtPipe } from './pipes/sqrt.pipe';

@NgModule({
    declarations: [
        AppComponent,
        FormatPipe,
        JoinPipe,
        SqrtPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
