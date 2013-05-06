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

        booklistTemplate: Mustache.compile(BookListTemplate),

        initialize: function () {
            _.bindAll(this, 'render');

            Mustache.compilePartial('bookView', BookViewTemplate);

            this.collection = new BooksCollection();
            this.collection.fetch().done(this.render);

            this.collection.on('reset', this.reset);
        },

        render: function () {
            var renderedTemplate;

            console.log('rendering book list');
            console.log(this.collection.models);

            renderedTemplate = this.booklistTemplate({'books': this.collection.models});

            this.$el.html(renderedTemplate);
        }
    });

    return BookListView;
});
