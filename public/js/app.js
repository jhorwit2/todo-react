/** @jsx React.DOM **/

var app = app || {};

(function () {
    'use strict';

    var BackboneMixin = {
        componentDidMount: function () {
            // Whenever there may be a change in the Backbone data, trigger a
            // reconcile.
            this.getBackboneCollections().forEach(function (collection) {
                // explicitly bind `null` to `forceUpdate`, as it demands a callback and
                // React validates that it's a function. `collection` events passes
                // additional arguments that are not functions
                collection.on('add remove change', this.forceUpdate.bind(this, null));
            }, this);
        },
        componentWillUnmount: function () {
            // Ensure that we clean up any dangling references when the component is
            // destroyed.
            this.getBackboneCollections().forEach(function (collection) {
                collection.off(null, null, this);
            }, this);
        }
    };
    var TodoRow = app.TodoRow;

    var TodoTable = React.createClass({
        mixins: [BackboneMixin],
        getBackboneCollections: function () {
            return [this.props.todos];
        },
        render: function () {

            var todos = _(this.props.todos.models).map(function (todo) {
                return <TodoRow todo={todo} />;
            });

            return (
                <table className="table">
                    <thead>
                        <th></th>
                        <th>Completed</th>
                        <th>Todo</th>
                        <th>Modify</th>
                    </thead>
                    <tbody>
                        {todos}
                    </tbody>
                </table>
            );
        }
    });

    app.todos.add([
        new app.Todo({text: 'Todo #1'}),
        new app.Todo({text: 'Todo #2'})
    ]);

    React.renderComponent(<TodoTable todos={app.todos} />, document.getElementById('todos'));

}());