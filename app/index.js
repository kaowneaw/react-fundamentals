var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');

var Hello = createClass({
    render: function () {

        return (<div>Hello ReactJS Program!</div>);
    }
});

ReactDOM.render(<Hello/>, document.getElementById('app'));