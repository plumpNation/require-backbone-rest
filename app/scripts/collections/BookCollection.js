/*global define*/
define([
    'backbone',
    'models/Book'
], function (Backbone, Book) {
    'use strict';

    var BookCollection = Backbone.Collection.extend({
        'model': Book,
        'url': Config.Service.url + 'books'
    });

    return BookCollection;
});
