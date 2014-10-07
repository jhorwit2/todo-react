
var app = app || {};

(function () {
    'use strict';

    var Todos = Backbone.Collection.extend({
        model: app.Todo
        /*
        add methods to filter by completed, all & not completed.
         */
    });

    app.todos = new Todos();
}());