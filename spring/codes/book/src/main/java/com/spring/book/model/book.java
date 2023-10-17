package com.spring.book.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "books")
public class book {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String author;
    private Long year;
    public book(){
        super();
    }
    public book(Long id, String title, String author, Long year){
        super();
        this.id=id;
        this.title=title;
        this.author=author;
        this.year=year;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    public Long getYear() {
        return year;
    }
    public void setYear(Long year) {
        this.year = year;
    }
}
