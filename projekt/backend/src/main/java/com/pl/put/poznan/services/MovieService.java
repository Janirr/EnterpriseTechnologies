package com.pl.put.poznan.services;

import com.pl.put.poznan.models.Category;
import com.pl.put.poznan.models.Movie;
import com.pl.put.poznan.repositories.CategoryRepository;
import com.pl.put.poznan.repositories.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    private final MovieRepository movieRepository;
    private final CategoryService categoryService;

    public MovieService(MovieRepository movieRepository, CategoryService categoryService) {
        this.movieRepository = movieRepository;
        this.categoryService = categoryService;
    }

    public List<Movie> getAll(String category) {
        if (category == null) {
            return movieRepository.findAll();
        } else {
            // Fetch the Category from the database
            Category categoryEntity = categoryService.getCategoryByName(category)
                    .orElseThrow(() -> new IllegalArgumentException("Category not found: " + category));
            return movieRepository.findByCategory(categoryEntity);
        }
    }

    public Optional<Movie> getById(Long id) {
        return movieRepository.findById(id);
    }

    public Movie createMovie(Movie movie) {
        return movieRepository.save(movie);
    }
}
