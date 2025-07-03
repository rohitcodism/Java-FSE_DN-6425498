package com.springconfig.repository;

public class BookRepository {
    public String getBookById(int id) {
        return "Book#" + id + " - The Great Gatsby";
    }
}
