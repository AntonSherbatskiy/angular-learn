import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../components/app/app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from "../components/user/user.component";


@NgModule({
	declarations: [
		AppComponent,
		UserComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [HttpClient],
	bootstrap: [AppComponent]
})
export class AppModule { }
