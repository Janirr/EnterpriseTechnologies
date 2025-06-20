import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  movie: Movie = {
    id: undefined,
    title: '',
    description: '',
    releaseYear: 2025,
    price: 0.99,
    category: undefined
  };

  categories: Category[] = [];

  constructor(private movieService: MovieService, private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data: Category[]) => this.categories = data);
  }

  addMovie() {
    this.movieService.addMovie(this.movie).subscribe(() => {
      // reset or notify
    });
  }
}

