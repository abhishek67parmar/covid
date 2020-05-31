import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import {  CovidIndiaService } from './covid-india-service/covid-india.service';


export const routes: Routes = [  {path: '', component: HomeComponent}
                                 ];


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpClientModule
   ],
   providers: [
      CovidIndiaService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
