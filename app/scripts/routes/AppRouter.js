/*global define*/
define([
    'jquery',
    'backbone',
], function ($, Backbone) {

    'use strict';

    var AppRouter = Backbone.Router.extend({
            routes: {
                'books/:id': 'getBook',
                '*actions': 'defaultRoute' // Backbone will try match the route above first
            }
        }),

        // Instantiate the router
        appRouter = new AppRouter();

    appRouter.on('route:getPost', function (id) {
        console.log(id);
    });

    appRouter.on('route:defaultRoute', function (actions) {
        console.log(actions);
    });

    return AppRouter;
});
