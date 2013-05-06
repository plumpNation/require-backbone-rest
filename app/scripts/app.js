/*global require*/
define([
  'jquery',
  'underscore',
  'backbone',
  'routes/AppRouter', // Request router.js
], function ($, _, Backbone, Router) {
    var routes,

        initialize = function () {
            // Pass in our Router module and call it's initialize function
            routes = new Router();
            console.log('initialize Router');


            routes.on('defaultAction', function (actions) {
                // We have no matching route, lets just log what the URL was
                console.log('No route:', actions);
            });

            Backbone.history.start();

        };

    return {
        'initialize': initialize
    };
});
