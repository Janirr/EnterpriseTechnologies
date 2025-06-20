import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Movie[] = [];

  add(movie: Movie): void {
    this.items.push(movie);
  }

  remove(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  getItems(): Movie[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((total, movie) => total + movie.price, 0);
  }
}
