package com.spring.book.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.spring.book.model.book;

@Repository
public interface bookrepo extends JpaRepository<book, Long> {
    
}
