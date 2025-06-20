import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getById(id).subscribe(m => this.movie = m);
  }

  addToCart() {
    if (this.movie) {
      this.cartService.add(this.movie);
      alert('Film dodany do koszyka!');
    }
  }
}
