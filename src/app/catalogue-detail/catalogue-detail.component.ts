import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-catalogue-detail',
  templateUrl: './catalogue-detail.component.html',
  styleUrls: ['./catalogue-detail.component.css']
})

export class CatalogueDetailComponent implements OnInit {
  
  @Input() category: Category; 
  
  constructor() { 

  }

  ngOnInit() {
  }

}
