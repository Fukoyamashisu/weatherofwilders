import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogBody from './components/LogBody';
import Loader from './components/Loader';
import WeatherMood from './components/WeatherMood';
import Question from './components/Question';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={LogBody} />
      <Route path="/loading" component={Loader} />
      <Route path="/weatherofwilders" component={WeatherMood} />
      <Route path="/setyourMood" component={Question} />
    </div>
  </Router>
);

export default Routes;
