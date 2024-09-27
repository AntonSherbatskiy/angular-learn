import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostComponent } from "./components/post/post.component";
import { PostFormComponent } from "./components/post-form/post-form.component";
import { AppComponent } from "./components/app/app.component";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "./pipes/filter.pipe";

@NgModule({
    declarations: [
        AppComponent,
        PostFormComponent,
        PostComponent,
        FilterPipe
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
