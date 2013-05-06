/*global define, _*/
define([
    'mustache',
    'backbone',
    'collections/books',
    'text!templates/books/list.mustache'
], function (Mustache, Backbone, BooksCollection, Template) {
    'use strict';

    var BookListView = Backbone.View.extend({

        el: $('#content-container'),

        template: Mustache.compile(Template),

        initialize: function () {
            var compiledTemplate;

            this.collection = new BooksCollection();
            this.collection.add({id: 2, title: "Something"});

            console.log(this.collection.models);

            // Compile the template using Underscores micro-templating
            compiledTemplate = this.template({'books': this.collection.models});

            console.log(compiledTemplate);

            this.$el.html(compiledTemplate);
        }
    });

    return BookListView;
});
