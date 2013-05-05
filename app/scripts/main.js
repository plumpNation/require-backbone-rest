/*global require*/
require([
    'jquery',
    'backbone',
    'collections/BookCollection',
    'views/BookView'
], function ($, Backbone, BookCollection) {
    'use strict';

    Backbone.history.start();

    var addBook = function (bookData) {
            var book = new Book(bookData);
        },

        books = new BookCollection();

    books.fetch();
});
