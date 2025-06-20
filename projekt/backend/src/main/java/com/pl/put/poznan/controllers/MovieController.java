package com.pl.put.poznan.controllers;


import com.pl.put.poznan.models.Movie;
import com.pl.put.poznan.services.MovieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<Movie> getAll(@RequestParam(required = false) String category) {
        return movieService.getAll(category);
    }

    @GetMapping("/{id}")
    public Movie getById(@PathVariable Long id) {
        return movieService.getById(id)
                .orElseThrow(() -> new RuntimeException("Movie not found with id: " + id));
    }

    @PostMapping
    public Movie createMovie(@RequestBody Movie movie) {
        return movieService.createMovie(movie);
    }
}
