/*global define*/
define([
    'jquery',
    'backbone',
], function ($, Backbone) {

    'use strict';

    var AppRouter = Backbone.Router.extend({
            routes: {
                "books/:id": "getBook",
                "*actions": "defaultRoute" // Backbone will try match the route above first
            }
        }),

        // Instantiate the router
        app_router = new AppRouter;

        app_router.on('route:getPost', function (id) {
            // Note the variable in the route definition being passed in here
        });

        app_router.on('route:defaultRoute', function (actions) {
            // do something
        });

    return AppRouter;
});
