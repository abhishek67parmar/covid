import { Component, OnInit } from '@angular/core';
import {  CovidIndiaService } from './../covid-india-service/covid-india.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  covidIndiaData;
  constructor(private covidIndiaService: CovidIndiaService) { }

  ngOnInit() {
    console.log(this.covidIndiaService.getCovidIndia());
    this.covidIndiaService.getCovidIndia().subscribe((data) => {
      console.log(data);
      this.covidIndiaData = data;
    });
  }

}
