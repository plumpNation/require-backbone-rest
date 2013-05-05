/*global define*/
define([
    'mustache',
    'backbone',
    'text!templates/book.mustache'
], function (Mustache, Backbone, Template) {
    'use strict';

    var BookView = Backbone.View.extend({

        initialize: function () {
            this.template = Mustache.compile(Template);
        },

        render: function () {
            var view = this,
                rendered;

            rendered = view.template(view.model.toJSON());
            console.log('rendering');
            console.log(rendered);
            $(view.el).html(rendered);

            debug.log('EventView rendered');
            return view;
        }
    });

    return BookView;
});
