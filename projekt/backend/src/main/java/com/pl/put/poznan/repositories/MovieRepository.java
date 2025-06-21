package com.pl.put.poznan.repositories;

import com.pl.put.poznan.models.Category;
import com.pl.put.poznan.models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findByCategory(Category category);
}
