import { Categories } from './../categories';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  catalogue : Categories = {
    id:1,
    name:'Electronics'
  };


  constructor() { }

  ngOnInit() {
  }

}
