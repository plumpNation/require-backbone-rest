define([
    'underscore',
    'mustache',
    'backbone',
    'models/book',
    'text!templates/books/add.mustache'
], function (_, Mustache, Backbone, BookModel, BookAddViewTemplate) {
    'use strict';

    /**
     * View for the add book form. Extends Backbone View directly.
     */
    var BookAddView = Backbone.View.extend({

        el: $('#content-container'),

        events: {
            'submit #add-book': 'saveToModel'
        },

        bookAddTemplate: Mustache.compile(BookAddViewTemplate),

        /**
         * Initialises the view. Called automatically as soon as the view is constructed.
         * Calls render immediately.
         *
         * @see render
         * @return {void}
         */
        initialize: function () {
            console.info('Initialising book add view');
            _.bindAll(this, 'saveToModel');
            this.render();
        },

        /**
         * Used to render the book add view.
         *
         * @return {void}
         */
        render: function () {
            console.info('Rendering book add view');
            this.$el.html(this.bookAddTemplate());
        },

        /**
         * Callback for successful POST of book to the service.
         *
         * @param  {object} response Contains response items from service.
         * @return {void}
         */
        saveSuccess: function (response) {
            console.info('Successful POST');
            console.info(response.message);
        },

        /**
         * Callback for failed POST of book to the service.
         *
         * @param  {object} response Contains response items from service.
         * @return {void}
         */
        saveFail: function (response) {
            console.warn('Failed POST');
            console.warn(response);
        },

        /**
         * Adds validation errors to the view. Could add markup or just console warnings.
         *
         * @param  {object} errors The book validation errors.
         * @return {void}
         */
        displayValidationErrors: function (errors) {
            _(this.model.validationError).each(function (error, key) {
                console.warn(key, error);
            });
        },

        close: function () {
            console.log('closing');
        },

        /**
         * Callback for form submit event.
         *
         * @see validate
         * @param  {object} e The form submit event
         * @return {void}
         */
        saveToModel: function (e) {
            var posting,
                postParams = {
                    'title': $('#add-book-title').val()
                };

            e.preventDefault();

            this.model = new BookModel(postParams);

            // Saving validates the data and if it is valid, POSTs it to the service.
            // The POST action will return a deferred object.
            // http://api.jquery.com/category/deferred-object/
            // http://api.jquery.com/jQuery.Deferred/
            posting = this.model.save(postParams);

            if (this.model.validationError) {
                displayValidationErrors(this.model.validationError);

            // We want to use the promise of the deferred object. It should
            // exist if the data is valid, as the data would then be POSTed.
            } else if (_(posting.promise).isFunction()) {
                posting.promise().then(this.saveSuccess, this.saveFail);

            } else {
                console.error('Something has gone hideously wrong.');
            }


        }
    });

    return BookAddView;
});
