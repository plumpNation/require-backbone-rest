/*global require*/
define([
  'jquery',
  'underscore',
  'backbone',
  'routes/AppRouter', // Request router.js
], function ($, _, Backbone, Router) {
    var initialize = function(){
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    }

    return {
        'initialize': initialize
    };
});
