define([
    'jquery',
    'underscore',
    'backbone',
    'views/books/view',
    'views/books/list'
], function ($, _, Backbone, BookView, BookListView) {

    'use strict';

    var AppRouter = Backbone.Router.extend({
            'routes': {
                'books': 'getBooks',
                'book/:id': 'getBook',
                // Default, goes at bottom remember.
                '*actions': 'defaultAction'
            },

            'getBook': function (bookId) {
                var bookView = new BookView(bookId);
            },

            'getBooks': function () {
                var bookListView = new BookListView();
            },

            'defaultAction': function () {
                console.log('default action');
            }
        });

    return AppRouter;
});
