import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
//import { PagesComponent } from './pages/pages.component';

@NgModule({
    declarations: [
        AppComponent,
        
    ],
    imports: [
        BrowserModule,
        PagesModule,
        RouterModule.forRoot([
            {
                path: "" ,  
                //component: PagesComponent
                loadChildren: "./pages/pages.module#PagesModule"
            }])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
