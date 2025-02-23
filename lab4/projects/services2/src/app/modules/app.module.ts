import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../components/app/app.component';
import { CounterComponent } from '../components/counter/counter.component';

@NgModule({
	declarations: [
		AppComponent,
		CounterComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {

}
