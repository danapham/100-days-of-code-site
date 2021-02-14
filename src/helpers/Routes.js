import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeAuthed from '../views/HomeAuthed';
import DailyEntry from '../views/DailyEntry';
import FirstDateForm from '../views/FirstDateForm';
import HomeUnauthed from '../views/HomeUnauthed';
import NotFound from '../views/NotFound';

export default function Routes({ authed }) {
  return (
          <Switch>
            <Route exact path='/' component={() => <HomeAuthed authed={authed} />} />
            <Route exact path='/entry' component={() => <DailyEntry authed={authed} />} />
            <Route exact path='/start-date' component={(props) => <FirstDateForm authed={authed} />} />
            <Route exact path='/login' component={() => <HomeUnauthed authed={authed} />} />
            <Route exact path='/notfound' component={() => <NotFound />} />
          </Switch>
  );
}
