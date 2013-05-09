define([
    'jquery',
    'underscore',
    'backbone',
    'views/books/view',
    'views/books/add',
    'views/books/list'
], function ($, _, Backbone, BookView, BookAddView, BookListView) {

    'use strict';

    var AppRouter = Backbone.Router.extend({

            'initialize': function () {
                console.log('Initialising Router');
            },

            'routes': {
                'books'         : 'getBooks',
                'book/:id'      : 'getBook',
                'book'          : 'addBook',
                'book/'         : 'addBook', // strange but needed in case either url used

                // Default, goes at bottom remember.
                '*actions': 'defaultAction'
            },

            'addBook': function () {
                new BookAddView();
            },

            'getBook': function (bookId) {
                new BookView(bookId);
            },

            'getBooks': function () {
                new BookListView();
            },

            'defaultAction': function () {
                console.log('default action');
            }
        });

    return AppRouter;
});
