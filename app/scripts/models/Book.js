/*global define */
define([
    'backbone'
], function (Backbone) {
    'use strict';

    var Book = Backbone.Model.extend({
        defaults: {
            'id': null,
            'title': 'Untitled'
        }
    });

    return Book;
});
