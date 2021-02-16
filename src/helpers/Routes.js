import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import DailyEntry from '../views/DailyEntry';
import FirstDateForm from '../views/FirstDateForm';
import HomeUnauthed from '../views/HomeUnauthed';
import NotFound from '../views/NotFound';

class Routes extends Component {
  render() {
    const { authed } = this.props;

    return (
          <Switch>
            <Route exact path='/' component={() => <Home authed={authed} />} />
            <Route exact path='/entry' component={() => <DailyEntry authed={authed} />} />
            <Route exact path='/start-date' component={(props) => <FirstDateForm authed={authed} />} />
            <Route exact path='/login' component={() => <HomeUnauthed authed={authed} />} />
            <Route exact path='/notfound' component={() => <NotFound />} />
          </Switch>
    );
  }
}

// const PrivateRoute = ({ component: SelectedComponent, user, ...rest }) => {
//   const routeChecker = (props) => (user
//     ? (<SelectedComponent {...props} user={user} />)
//     : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />));

//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

export default Routes;
