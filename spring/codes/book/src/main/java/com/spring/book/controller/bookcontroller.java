package com.spring.book.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.spring.book.repo.bookrepo;
import com.spring.book.model.book;

@RestController
@CrossOrigin("http://localhost:3000")
public class bookcontroller {
    @Autowired
    bookrepo bookrepo;

    @GetMapping("/getAll")
    public List<book> getAllBooks(){
        return bookrepo.findAll();
    }

    @PostMapping("/book")
    public book addBook(
        @RequestParam("title") String title,
        @RequestParam("author") String author,
        @RequestParam("year") Long year)
        {
            book newBook = new book();
            newBook.setTitle(title);
            newBook.setAuthor(author);
            newBook.setYear(year);
            return bookrepo.save(newBook);
        }

    @PutMapping("/book/{id}")
    public book updateBook(@PathVariable(value = "id") Long id, @RequestBody book book){
        book newBook = bookrepo.findById(id)
        .orElseThrow(null);
        newBook.setTitle(book.getTitle());
        newBook.setAuthor(book.getAuthor());
        newBook.setYear(book.getYear());
        book updatedBook=bookrepo.save(book);
        return updatedBook;
    }

    @DeleteMapping("/book/{id}")
    public String deleteBook(@PathVariable(value="id") Long id){
        bookrepo.deleteById(id);
        return "book with "+id+" has been deleted successfully";
    }

}
