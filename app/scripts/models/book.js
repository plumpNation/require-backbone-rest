/*global define */
define([
    'backbone'
], function (Backbone) {
    'use strict';

    var Book = Backbone.Model.extend({
        defaults: {
            // Id must be undefined so that it is not sent to service if not set.
            'id': undefined,

            'title': 'Untitled'
        },

        url: Config.Books.Api,

        /**
         * Validates the book title. Checks that the title is defined, is a string and has a length
         * of more than or equal to 1.
         *
         * @param  {string} title The book title
         * @return {boolean}      Returns true if the book title is valid.
         */
        validateTitle: function (title) {
            return !_(title).isUndefined() &&
                    _(title).isString() &&
                    title.length >= 1;
        },

        /**
         * Thrown automatically when a model is saved.
         *
         * @param  {object} attributes The book attributes i.e. title, id
         * @return {void|string}       Returns validation error message if validation fails.
         */
        validate: function (attributes) {
            var errors = {};

            if (!this.validateTitle(attributes.title)) {
                errors.title = 'You must provide a valid title.';
            }

            if (!_(errors).isEmpty()) {
                return errors;
            }
        },

        /**
         * Automatically called when book model is constructed.
         *
         * @return {void}
         */
        initialize: function () {
            console.info('Initialising book model');
        }
    });

    return Book;
});
