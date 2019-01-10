import React, { Component } from 'react';
import base from '../base';

import AverageWilders from './AverageWilders';

import moment from 'moment';
import 'moment/locale/fr';

const day = moment().format('dddd');
const dateMonth = moment().format('D-MMMM-YYYY');

class WeatherMoodAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
    };
    this.getAverage = this.getAverage.bind(this);
    this.getAverageAll = this.getAverageAll.bind(this);
  }

  componentWillMount() {

    //Link base and state create a ref for all users
    this.ref = base.syncState(`/`, {
      context: this,
      state: 'users',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  getAverageAll(language) {
    const { users } = this.state;
    const js = Object.values(users).map(el => el);
    const note = js.map(el => {
      if (el[day]) {
        return el[day].hasOwnProperty(dateMonth) ? el[day][dateMonth] : null;
      }
      return null;
    }).filter(el => el !== null);
    if (note.length > 0) {
      const userMoodDay = note.length;
      const moyenne = note.reduce((a, b) => +a + +b, 0) / note.length;
      const average = Number.isInteger(moyenne) ? moyenne : moyenne.toFixed(1);
      return <AverageWilders note={average === 11 ? 10 : average} people={userMoodDay} language={'ALL'} />;
    }
  }

  getAverage(language) {
    const { users } = this.state;
    const js = Object.values(users).map(el => el.language === language ? el : null).filter(el => el !== null);
    const note = js.map(el => {
      if (el[day]) {
        return el[day].hasOwnProperty(dateMonth) ? el[day][dateMonth] : null;
      }
      return null;
    }).filter(el => el !== null);
    if (note.length > 0) {
      const userMoodDay = note.length;
      const moyenne = (note.reduce((a, b) => +a + +b, 0)) / note.length;
      const average = Number.isInteger(moyenne) ? moyenne : moyenne.toFixed(1);
      return <AverageWilders note={average === 11 ? 10 : average} people={userMoodDay} language={language} />;
    }
  }

  render() {

    return (

      <div className="row justify-content-center">
        {this.getAverage('JS')}
        {this.getAverageAll()}
        {this.getAverage('PHP')}
      </div>

    );
  }
}

export default WeatherMoodAll;
