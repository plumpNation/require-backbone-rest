/*global require*/
require([
    'jquery',
    'underscore',
    'backbone',
    'helpers/ajax',
    'collections/BookCollection'
], function ($, _, Backbone, Ajax, BookCollection) {
    'use strict';

    Backbone.history.start();

    var addBook = function (bookData) {
            var book = new Book(bookData);
        },

        handleData = function (response) {
            books = new BookCollection();
            books.set(books.parse(response.books));
            console.log(books.models);
        },

        books;

    Ajax.get('books').then(handleData);
});
