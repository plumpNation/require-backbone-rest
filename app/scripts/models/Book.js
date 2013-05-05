/*global define */
define([
    'backbone'
], function (Backbone) {
    'use strict';

    var Book = Backbone.Model.extend({
        defaults: {
            'id': null,
            'title': ''
        },

        initialize: function () {
            this.on('change:title', function (model) {
                var title = model.get('title');
                console.log('Book changed title to ' + title);
            });
        }
    });

    return Book;
});
