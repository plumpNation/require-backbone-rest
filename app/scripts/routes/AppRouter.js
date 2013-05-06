define([
    'jquery',
    'underscore',
    'backbone',
    'views/books/list'
], function ($, _, Backbone, BookListView) {

    var AppRouter = Backbone.Router.extend({
            'routes': {

                // Default, goes at bottom remember.
                '*actions': 'defaultAction'
            },

            'defaultAction': function () {
                console.log('default action');
                var bookListView = new BookListView();
            }
        });

    return AppRouter;
});
