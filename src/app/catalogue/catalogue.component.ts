import { Catalogue } from './../catalogue';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  catalogue : Catalogue = {
    id:1,
    name:'Electronics'
  };


  constructor() { }

  ngOnInit() {
  }

}
