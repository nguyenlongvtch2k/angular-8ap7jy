import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {data} from '../MockData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  products = data;
  selected: Product;
   showDetail(product){
this.selected = product
   }
  
    removeItem(id){
      this.products = this.products.filter(x => x.id !== id);
    }
  
}