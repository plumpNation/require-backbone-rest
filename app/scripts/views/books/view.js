define([
    'underscore',
    'mustache',
    'backbone',
    'models/book',
    'text!templates/books/view.mustache'
], function (_, Mustache, Backbone, BookModel, BookViewTemplate) {

    'use strict';

    var BookView = Backbone.View.extend({

        el: $('#content-container'),

        bookTemplate: Mustache.compile(BookViewTemplate),

        /**
         * Called automatically on construction of this view.
         *
         * @param  {string} bookId The id of the book you wish to view.
         * @return {void}
         */
        initialize: function (bookId) {
            _.bindAll(this, 'render');

            console.info('Initialising book view', this.book);

            this.book = new BookModel();
            this.book.url += bookId;

            this.book.fetch().promise().done(this.render);
        },

        /**
         * Populates the book view template with book data and adds to the DOM.
         *
         * @return {void}
         */
        render: function () {
            var renderedTemplate;

            console.info('Rendering book', this.book);

            renderedTemplate = this.bookTemplate(this.book);

            this.$el.html(renderedTemplate);
        }
    });

    return BookView;
});
