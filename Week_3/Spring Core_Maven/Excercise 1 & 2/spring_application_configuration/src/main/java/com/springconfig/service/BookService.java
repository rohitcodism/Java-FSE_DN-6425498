package com.springconfig.service;

import com.springconfig.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void showBookDetails(int bookId) {
        String book = bookRepository.getBookById(bookId);
        System.out.println("Book Details: " + book);
    }
}
