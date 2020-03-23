import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductserviceService } from '../product.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
