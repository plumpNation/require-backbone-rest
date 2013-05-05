/*global require*/
require([
    'jquery',
    'backbone',
    'views/BookView'
], function ($, Backbone, BookCollection, BookView) {
    'use strict';

    var bookView;

    bookView = new BookView({
        'el': '#content-container'
    });

    Backbone.history.start();
});
