/*global require*/
require([
    'jquery',
    'backbone',
    'collections/BookCollection',
    'views/BookView'
], function ($, Backbone, BookCollection, BookView) {
    'use strict';

    var books = new BookCollection(),
        BookView = new BookView({'el': '#content-container'});

    books.fetch();

    Backbone.history.start();
});
