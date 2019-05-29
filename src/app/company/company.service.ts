import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companies$: BehaviorSubject<Company[]> = new BehaviorSubject<Company[]>([]);

  constructor(private httpclient: HttpClient) {
    this.loadCompanies();
  }

  API_BASE = 'https://firebootcamp-crm-api.azurewebsites.net/api';

  loadCompanies() {
    this.httpclient.get<Company[]>(`${this.API_BASE}/company`)
    .subscribe(c => this.companies$.next(c) );
  }

  getCompanies(): Observable<Company[]> {
    return this.companies$;
  }
}
