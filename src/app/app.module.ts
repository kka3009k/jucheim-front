import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import {HeadComponent} from './head/head.component';
import {AboutComponent} from './about/about.component';
import {ProductsComponent} from './products/products.component';
import {ViewProductComponent} from './products/view/view.component';
const appRoutes: Routes = [
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
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
