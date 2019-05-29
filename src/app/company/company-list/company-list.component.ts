import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(private companySvc: CompanyService) {
  }

  companies: Company[];

  aynccompanies$: Observable<Company[]>;

  ngOnInit() {
    this.aynccompanies$ = this.getCompanies();
  }

  getCompanies()
  {
    this.companySvc.getCompanies()
    .pipe(
      tap(c => console.log(`Tapgot ${c.length} companies`))
    )
    .subscribe(next => this.companies = next,
      error => console.error('Error', error),
      () => console.log('complete'));

    return this.companySvc.getCompanies();
  }

}
