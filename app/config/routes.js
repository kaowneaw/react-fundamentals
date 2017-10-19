var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var PromptContainer = require("../containers/PromptContainer");

var routes = (
    <Router history={browserHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='playerOne' header='Player One' component={PromptContainer} />
        </Route>
    </Router>
);

module.exports = routes;