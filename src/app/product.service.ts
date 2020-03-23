import { Injectable } from '@angular/core';
import { data } from './MockData';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  products = data;
  constructor() { }
  getProducts(){
    return this.products;
  }
  addProduct(product){
    let newObj = { id: 6, ...product };
    this.products.push(newObj);
  }
}
