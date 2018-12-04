import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
//import { FooterModule } from "./shared/modules/footer/footer.module";
//import { NavigationBarModule } from "./shared/modules/navigation-bar/navigation-bar.module";
import { PagesRoutingModule } from "./pages-routing.module";

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
  //  NavigationBarModule,
  //  FooterModule,
  ],
  providers: [],
  entryComponents: [
  ]
})
export class PagesModule { }
