/*global define, Config*/
define([
    'backbone',
    'models/Book'
], function (Backbone, Book) {
    'use strict';

    var Books = Backbone.Collection.extend({
        'model': Book,
        'url': Config.Service.url + 'books',
        // Save all of the todo items under the `"todos"` namespace.
        // 'localStorage': new Backbone.LocalStorage('todos-backbone')
    });

    return Books;
});
