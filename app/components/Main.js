var React = require('react');
var createClass = require('create-react-class');

var Main = createClass({
    render: function () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main;