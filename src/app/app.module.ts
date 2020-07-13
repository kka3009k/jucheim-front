import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import {HeadComponent} from './head/head.component';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes =[
  { path: 'main', component: MainComponent},
  { path: 'about', component : AboutComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    HeadComponent,
    AboutComponent
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
