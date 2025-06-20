import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  categories: Category[] = [];
  selectedCategory: string = '';

  constructor(private movieService: MovieService, private categoryService: CategoryService) {}

  ngOnInit() {
    this.loadMovies();
    this.loadCategories();
  }

  loadMovies() {
    this.movieService.getAll(this.selectedCategory).subscribe(data => this.movies = data);
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  onCategoryChange() {
    this.loadMovies();
  }
}