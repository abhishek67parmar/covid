import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidIndiaService {

  constructor(
    private http: HttpClient
  ) { }

  getCovidIndia() {
    return this.http.get('https://api.covid19india.org/state_district_wise.json');
  }

}
