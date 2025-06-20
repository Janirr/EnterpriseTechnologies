package com.pl.put.poznan.repositories;

import com.pl.put.poznan.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
