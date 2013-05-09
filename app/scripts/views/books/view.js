/*global define, _*/
define([
    'mustache',
    'backbone',
    'models/book',
    'text!templates/books/view.mustache'
], function (Mustache, Backbone, BookModel, BookViewTemplate) {
    'use strict';

    var BookView = Backbone.View.extend({

        el: $('#content-container'),

        bookTemplate: Mustache.compile(BookViewTemplate),

        initialize: function (bookId) {
            _.bindAll(this, 'render');

            this.book = new BookModel(bookId);

            this.book.fetch().done(this.render);
        },

        render: function () {
            var renderedTemplate;

            console.log('rendering book');
            console.log(this.book);

            renderedTemplate = this.bookTemplate(this.book);

            this.$el.html(renderedTemplate);
        }
    });

    return BookView;
});
