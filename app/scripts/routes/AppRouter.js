define([
    'jquery',
    'underscore',
    'backbone',
    'views/books/list'
], function ($, _, Backbone, BookListView) {

    'use strict';

    var AppRouter = Backbone.Router.extend({
            'routes': {
                'books': 'getBooks',
                // Default, goes at bottom remember.
                '*actions': 'defaultAction'
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
