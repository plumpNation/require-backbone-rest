/*global define, _*/
define([
    'mustache',
    'backbone',
    'views/books/view',
    'collections/books',
    'text!templates/books/view.mustache',
    'text!templates/books/list.mustache',
], function (Mustache, Backbone, BookView, BooksCollection, BookViewTemplate, BookListTemplate) {
    'use strict';

    var BookListView = Backbone.View.extend({

        el: $('#content-container'),

        booklistTemplate: Mustache.compile(BookListTemplate),

        initialize: function () {
            _.bindAll(this);

            this.collection = new BooksCollection();

            this.collection.on('sync', this.addAll, this);
            // Some books etc insist that this should be 'reset', however
            // the changelog for v1.0.0 got me looking under the hood into the
            // annotated source which is here:
            // http://backbonejs.org/docs/backbone.html
            // If the option {reset: true} is not passed into the fetch method
            // the 'reset' event is not fired.
            // Read http://backbonejs.org/#upgrading

            this.collection.fetch();
            this.render();
        },

        addOne: function (model) {
            console.log(model);
            var bookView = new BookView({
                'model': model,
                'el': this.$el
            });
        },

        addAll: function () {
            _(this.collection.models).each(this.addOne);
        },

        render: function () {
            var renderedTemplate;

            console.info('Rendering book list');

            renderedTemplate = this.booklistTemplate();

            this.$el.html(renderedTemplate);
        }
    });

    return BookListView;
});
