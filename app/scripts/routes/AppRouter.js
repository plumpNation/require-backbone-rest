define([
    'jquery',
    'underscore',
    'backbone',
    'views/books/list'
], function ($, _, Backbone, BookListView) {

    var AppRouter = Backbone.Router.extend({
            'routes': {
                // Define some URL routes
                '/books': 'showBooks',

                // Default
                '*actions': 'defaultAction'
            },

            'showBooks': function () {
                console.log('show books action');
                // Call render on the module we loaded in via the dependency array
                // 'views/projects/list'
                var bookListView = new BookListView();
                bookListView.initialize();
            },

            'defaultAction': function () {
                console.log('default action');
            }
        });

    return AppRouter;
});
