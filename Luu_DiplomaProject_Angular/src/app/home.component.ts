import { Component, OnInit } from '@angular/core';
import { HamperService } from './hamper.service';
import { Hamper } from './hamper';
import { Category } from './category';

@Component({
  selector: 'my-home',
  template: `
<div style="text-align: center;">
  <h1 style="color: #AC3B61;">Welcome to Grande Gift</h1>
</div>
<label>Filter by category:</label>

<select [(ngModel)]="categoryId">
  <option value="" disabled selected hidden>Category</option>
  <option *ngFor="let c of categories" value="{{c.categoryId}}">{{c.name}}</option>
</select>
<button (click)="search()">Filter</button>

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tr *ngFor="let h of hampers">
    <td>{{h.name}}</td>
    <td>{{h.price | currency: 'USD':true}}</td>
  </tr>
</table>
`,
  providers: [HamperService]
})
export class HomeComponent implements OnInit {

  categoryId: number;
  
  categories: Category[];
  hampers: Hamper[];

  constructor(private _hamperService: HamperService) { }

  search() {
    this._hamperService.SearchByCategory(this.categoryId).subscribe(result => { this.hampers = result });
  }

  ngOnInit() {
    this._hamperService.GetAllHampers().subscribe(result => { this.hampers = result });
    this._hamperService.GetAllCategories().subscribe(result => { this.categories = result });
  }
}
