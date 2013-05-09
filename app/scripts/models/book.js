/*global define */
define([
    'backbone'
], function (Backbone) {
    'use strict';

    var Book = Backbone.Model.extend({
        defaults: {
            'id': null,
            'title': 'Untitled'
        },

        url: Config.Books.Api,

        initialize: function (bookId) {
            this.url += bookId;
        }
    });

    return Book;
});
