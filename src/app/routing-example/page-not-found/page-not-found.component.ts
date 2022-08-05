import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
Location
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private location: Location) { }
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {

  }
}
