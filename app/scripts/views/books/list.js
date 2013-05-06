/*global define, _*/
define([
    'mustache',
    'backbone',
    'collections/books',
    'text!templates/books/list.mustache',
    'text!templates/books/view.mustache',
], function (Mustache, Backbone, BooksCollection, BookListTemplate, BookViewTemplate) {
    'use strict';

    var BookListView = Backbone.View.extend({

        el: $('#content-container'),

        initialize: function () {
            var compiledTemplate;

            Mustache.compilePartial('bookView', BookViewTemplate);
            this.booklistTemplate = Mustache.compile(BookListTemplate);

            this.collection = new BooksCollection();
            this.collection.add({id: 2, title: "Something"});

            console.log(this.collection.models);

            // Compile the booklistTemplate using Underscores micro-templating
            compiledTemplate = this.booklistTemplate({'books': this.collection.models});

            this.$el.html(compiledTemplate);
        }
    });

    return BookListView;
});
