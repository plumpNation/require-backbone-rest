/*global define, _*/
define([
    'mustache',
    'backbone',
    'collections/BookCollection',
    'text!templates/book.mustache'
], function (Mustache, Backbone, BookCollection, Template) {
    'use strict';

    var BookView = Backbone.View.extend({

        initialize: function () {
            _(this).bindAll('render'); // fixes loss of context for 'this' within methods
            this.template = Mustache.compile(Template);
            this.collection = new BookCollection();
            this.collection.fetch();
            console.log(this.collection);
            this.render();
        },

        render: function () {
            var view = this,
                rendered;

            // this.collection.each(this.add);
            console.log(view.collection);


            rendered = view.template(view.model.toJSON());
            console.log('rendering');
            console.log(rendered);
            view.$el.html(rendered);
            return view;
        }

    });

    return BookView;
});
