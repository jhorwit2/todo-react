/** @jsx React.DOM */

var app = app || {};

(function () {
    app.TodoRow = React.createClass({
        getInitialState: function () {
            return {
                edit: false
            };
        },
        edit: function () {
            this.setState({edit: true});
        },
        save: function (e) {
            this.props.todo.save({text: e.target.value});
            this.setState({edit: false});
        },
        completed: function () {
            this.props.todo.save({completed: !this.props.todo.get('completed')}) ;
        },
        render: function () {
            console.log('render');
            return (
                <tr>
                    <td>{this.props.todo.cid.substr(1)}</td>
                    <td><input type="checkbox" className="checkbox"
                        onChange={this.completed}
                        checked={this.props.todo.get('completed')}/></td>
                    <td>
                        <textarea className="form-control" readOnly={!this.state.edit} >{this.props.todo.get('text')}</textarea>
                    </td>
                    <td>
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                                <i className="fa fa-bars"></i>
                            </button>
                            <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                                <li><a role="menuitem" tabindex="-1" onClick={this.save}>Save</a></li>
                                <li><a role="menuitem" tabindex="-1" onClick={this.edit}>Edit</a></li>
                                <li><a role="menuitem" tabindex="-1">Delete</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            );
        }
    });
}());


