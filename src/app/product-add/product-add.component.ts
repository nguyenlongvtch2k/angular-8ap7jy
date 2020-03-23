import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductserviceService } from '../product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

 product: Product = new Product();
  constructor(
    private ProductserviceService : ProductserviceService
  ) { }

  ngOnInit(): void {
  }
  addProduct(){
    this.ProductserviceService.addProduct(this.product);
  }
}
