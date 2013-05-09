define([
    'backbone',
    'routes/AppRouter' // Request router.js
], function (Backbone, Router) {
    'use strict';

    var routes,

        initialize = function () {
            console.log('Initialising application');
            // Pass in our Router module and call it's initialize function
            routes = new Router();
            Backbone.history.start();
        };

    return {
        'initialize': initialize
    };
});
