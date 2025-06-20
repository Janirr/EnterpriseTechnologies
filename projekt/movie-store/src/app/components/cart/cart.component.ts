import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cartItems: Movie[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  removeFromCart(id: number) {
    this.cartService.remove(id);
    this.loadCart();
  }
}
