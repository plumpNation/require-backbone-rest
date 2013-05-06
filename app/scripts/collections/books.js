/*global define, Config*/
define([
    'backbone',
    'models/book'
], function (Backbone, BookModel) {
    'use strict';

    var Books = Backbone.Collection.extend({
        'model': BookModel,
        'url': Config.Service.url + 'books',
        // Save all of the todo items under the `"todos"` namespace.
        // 'localStorage': new Backbone.LocalStorage('todos-backbone')
        initialize: function () {
            console.log('initialize Book collection');
        }
    });

    return Books;
});
