import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {  CovidIndiaService } from './../covid-india-service/covid-india.service';
let stateName: any;
let stateData: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  covidIndiaData;
  constructor(private covidIndiaService: CovidIndiaService, public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.covidIndiaService.getCovidIndia());
    this.covidIndiaService.getCovidIndia().subscribe((data) => {
      console.log(data);
      this.covidIndiaData = data;
    });
  }

  openDialog(state) {
    stateName = state;
    console.log(stateName);
    stateData = this.covidIndiaData[state].districtData;
    console.log(stateData);
    this.dialog.open(StateInfoComponent);

  }

}


@Component({
  selector: 'app-state-info',
  templateUrl: 'state-info.component.html',
})
export class StateInfoComponent {
  covidStateName = stateName;
  covidStateData = stateData;
}
