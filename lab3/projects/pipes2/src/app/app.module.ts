import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/components/app.component';
import { FormsModule } from '@angular/forms';
import { FormatPipe } from './pipes/format.pipe';
import { JoinPipe } from './pipes/join.pipe';


@NgModule({
    declarations: [
        AppComponent,
        FormatPipe,
        JoinPipe
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
