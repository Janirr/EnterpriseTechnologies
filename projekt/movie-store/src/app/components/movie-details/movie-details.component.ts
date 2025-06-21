import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieService } from 'src/app/services/movie.service';
import { CartService } from 'src/app/services/cart.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html'
})
export class MovieDetailsComponent implements OnInit {
  movie?: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getById(id).subscribe(m => this.movie = m);
  }

  addToCart() {
    if (this.movie) {
      const isAlreadyInCart = this.cartService.getItems().some(item => item.id === this.movie?.id);
      if (isAlreadyInCart) {
        this.snackBar.open('Film już znajduje się w koszyku!', 'Zamknij', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      } else {
        this.cartService.add(this.movie);
        this.snackBar.open('Film dodany do koszyka!', 'Zamknij', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    }
  }
}