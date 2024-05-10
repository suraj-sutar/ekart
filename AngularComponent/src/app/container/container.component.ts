import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  // name: string = '';

  listOfString: string[] = ['Suraj', 'kashinath', 'yash', 'prayag'];

  addToCart: number = 0;
  product = {
    name: 'iPhone',
    price: 999,
    color: 'Matte Black',
    DiscountedPrice: 8.5,
    inStock: 6,

    pImage:
      'https://images.unsplash.com/photo-1519002020920-4ed7715eade3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZSUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
  };

  constructor() {}

  ngOnInit(): void {}

  getDiscountedPrice() {
    return (
      this.product.price -
      (this.product.price * this.product.DiscountedPrice) / 100
    );
  }

  // onNameChange(event: any) {
  //   this.name = event.target.value;
  // }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
  incrimentCartValue() {
    if (this.product.inStock > this.addToCart) {
      this.addToCart++;
    }
  }
}
