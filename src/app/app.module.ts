import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppletService } from  './_services/applet.service';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import {HeadComponent} from './head/head.component';
import {AboutComponent} from './about/about.component';
import {ProductsComponent} from './products/products.component';
import {ViewProductComponent} from './products/view/view.component';
import {FooterComponent} from './footer/footer.component';
import { LOCALE_ID } from '@angular/core';
const appRoutes: Routes = [
  { path: '', component: MainComponent},
  { path: 'main', component: MainComponent},
  { path: 'about', component : AboutComponent},
  { path: 'products/:id', component : ProductsComponent,
  },
  {path: 'products/:category/view/:id', component: ViewProductComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    HeadComponent,
    AboutComponent,
    ProductsComponent,
    ViewProductComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,{onSameUrlNavigation: 'reload'}
    ),

  ],
  providers: [AppletService,
    { provide: LOCALE_ID, useValue: "ru" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
