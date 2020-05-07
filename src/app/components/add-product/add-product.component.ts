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
    published: false
  };
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  saveProduct() {
    const data = {
      title: this.product.title,
      description: this.product.description
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
      published: false
    };
  }
}