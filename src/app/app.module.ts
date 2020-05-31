import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StateInfoComponent } from './home/home.component';

import {  CovidIndiaService } from './covid-india-service/covid-india.service';


export const routes: Routes = [  {path: '', component: HomeComponent}
                                 ];


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      StateInfoComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatDialogModule,
   ],
   entryComponents: [
      HomeComponent,
      StateInfoComponent
   ],
   providers: [
      CovidIndiaService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
