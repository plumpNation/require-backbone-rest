define([
    'backbone',
    'routes/AppRouter' // Request router.js
], function (Backbone, AppRouter) {
    'use strict';

    var initialize = function () {
            console.log('Initialising application');

            var router = new AppRouter();
            /*
                CUSTOM FUNCTIONALITY HERE

                Extend the View class to include a navigation method goTo
                Solution found on stack overflow here:
                http://stackoverflow.com/questions/7755344/using-the-backbone-js-router-to-navigate-through-views-modularized-with-require
             */
            Backbone.View.prototype.goTo = function (location) {
                router.navigate(location, true);
            };
            /*
                There is another approach called the EventBinder which is a module extracted from the
                Marionette library. You can read about that here:
                http://lostechies.com/derickbailey/2012/10/01/backbone-eventbinder-better-event-management-for-your-backbone-apps/
             */

            Backbone.history.start();
        };

    return {
        'initialize': initialize
    };
});
