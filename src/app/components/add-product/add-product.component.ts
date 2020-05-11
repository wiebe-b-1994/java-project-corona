import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product = {
    title: '',
    description: '',
    price: '',
    items: ''
  };
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  saveProduct() {
    const data = {
      title: this.product.title,
      description: this.product.description,
      price: this.product.price,
      items: this.product.items
    };

    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct() {
    this.submitted = false;
    this.product = {
      title: '',
      description: '',
      price: '',
      items: ''
    };
  }
}