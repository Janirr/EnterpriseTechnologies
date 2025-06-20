package com.pl.put.poznan.services;

import com.pl.put.poznan.models.Movie;
import com.pl.put.poznan.repositories.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> getAll(String category) {
        return category == null ? movieRepository.findAll() : movieRepository.findByCategory(category);
    }

    public Optional<Movie> getById(Long id) {
        return movieRepository.findById(id);
    }

    public Movie createMovie(Movie movie) {
        return movieRepository.save(movie);
    }
}
