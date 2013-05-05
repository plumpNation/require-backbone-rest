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

        books = new BookCollection();

    books.fetch();
});
