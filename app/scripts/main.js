/*global require*/
require([
    'jquery',
    'backbone',
    'collections/BookCollection',
    'views/BookView',
    'routes/AppRouter'
], function ($, Backbone, BookCollection, BookView, AppRouter) {
    'use strict';

    var books = new BookCollection(),
        bookView = new BookView({'el': '#content-container'});

    books.fetch();
    bookView.render();

    Backbone.history.start();
});
