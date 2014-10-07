/** @jsx React.DOM */

var app = app || {};

(function () {
    app.TodoRow = React.createClass({
        edit: function () {
            this.props.edit();
        },
        save: function () {
            this.props.save(this.refs.edit.getDOMNode().value);
        },
        completed: function () {
            this.props.todo.save({completed: !this.props.todo.get('completed')}) ;
        },
        render: function () {
            console.log('render', this.props.editing);
            return (
                <tr>
                    <td>{this.props.todo.cid.substr(1)}</td>
                    <td><input type="checkbox" className="checkbox"
                        onChange={this.completed}
                        checked={this.props.todo.get('completed')}/></td>
                    <td>
                        <textarea className="form-control" ref="edit"
                            readOnly={!this.props.editing}>{this.props.todo.get('text')}</textarea>
                    </td>
                    <td>
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                                <i className="fa fa-bars"></i>
                            </button>
                            <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                <li><a role="menuitem" tabindex="-1" onClick={this.save}>Save</a></li>
                                <li><a role="menuitem" tabindex="-1" onClick={this.edit}>Edit</a></li>
                                <li><a role="menuitem" tabindex="-1" onClick={this.props.cancel}>Cancel</a></li>
                                <li><a role="menuitem" tabindex="-1" onClick={this.props.destroy}>Delete</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            );
        }
    });
}());


