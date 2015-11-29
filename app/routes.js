
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import history from './lib/history';

// container
import App from './containers/App';
import Github from './containers/Github';

// components
import About from './components/About';
import Home from './components/Home';
import User from './components/User';

const foo = () => () => <h3>Foo</h3>;
const bar = () => () => <h3>Bar</h3>;

const Foo = foo(React);
const Bar = bar(React);

export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="foobar" components={{ goo: Foo, gar: Bar }} />
    </Route>
    <Route path="/github" component={Github}>
      <Route path=":username" component={User} />
    </Route>
  </Router>
);
