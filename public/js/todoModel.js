

var app = app || {};

(function () {
    'use strict';

    app.Todo = Backbone.Model.extend({
        defaults: {
            text: '',
            completed:false
        },
        toggle: function () {
            this.save({
                completed: !this.get('completed')
            });
        }
    })
}());