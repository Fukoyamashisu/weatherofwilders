import React, { Component } from 'react';
import styled from 'styled-components';

import base from '../base';

import Btn from './Btn';
import QuestionButton from './QuestionButton';

import moment from 'moment';
import 'moment/locale/fr';

const day = moment().format('dddd');
const dateMonth = moment().format('D-MMMM-YYYY');

//STYLED Components

const TitleThree = styled.h3`
  color:white;
  font-weight: bold;
  letter-spacing: 3px;
  text-align:center;
  margin: 25px 0;
`;

const TitleOne = styled.h3`
  color:white;
  font-weight: bold;
  letter-spacing: 3px;
  text-align:center;
  margin: 25px 0;
  font-size:20px;
`;

const TitleHour = TitleThree.extend`
  text-transform: capitalize;
`;

const Contenair = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  background:black;
`;

const Paraph = styled.p`
  color:grey;
  letter-spacing: 1px;
  font-size:14px;
  text-align:center;
`;

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      user: {},
    };
    this.getDate = this.getDate.bind(this);
    this.showTemp = this.showTemp.bind(this);
    this.renderTouch = this.renderTouch.bind(this);
    this.setMood = this.setMood.bind(this);
  }

  componentWillMount() {
    this.ref = base.syncState(`${localStorage.getItem('WeatherOfWilders')}`, {
      context: this,
      state: 'user',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  getDate() {
    const day = moment().format('dddd');
    const dateMonth = moment().format('D MMMM YYYY');
    return (
      <div>
        <TitleHour>{day}</TitleHour>
        <TitleThree>{dateMonth}</TitleThree>
      </div>
    );
  }

  renderTouch() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Dead', 10, 'Soleil'];
    return arr.map((element, key) => <QuestionButton key={key} text={element} showTemp={this.showTemp} />);
  }

  showTemp(e) {
    this.setState({ compteur: e.target.innerText, click: true });
  }

  setMood() {
    let { compteur, user } = this.state;
    if (compteur === 'Soleil') {
      compteur = 11;
    } else if (compteur === 'Dead') {
      compteur = 0;
    }
    const mood = {
      [dateMonth]: compteur,
    };
    user[day] = mood;
    this.setState({ user: user });
    this.props.history.push('/weatherofwilders');
  }

  render() {

    return (

      <Contenair>
        <div className="col">
          <div className="row align-items-center" style={{ height: '30%' }}>
            <div className="col">
              <div className="row justify-content-center">
                {this.getDate()}
              </div>
            </div>
          </div>
          <div className="row align-items-center" style={{ height: '15%' }}>
            <div className="col">
              <div className="row justify-content-center">
                {!this.state.click &&
                <TitleOne>How are you<br />Today ?</TitleOne>
                }
                {this.state.click &&
                <TitleThree>{this.state.compteur}</TitleThree>
                }
              </div>
            </div>
          </div>
          <div className="row align-items-end" style={{ height: '55%' }}>
            <div className="col">
              <div className="row justify-content-center">
                {!this.state.click &&
                <Paraph>Ton humeur<br />(min: Dead, max: Soleil)</Paraph>
                }
                {this.state.click &&
                <Btn text="Valider" setMood={this.setMood} />
                }
              </div>
              <div className="row justify-content-center" style={{ borderTop: '1px solid orange' }}>
                {this.renderTouch()}
              </div>
            </div>
          </div>
        </div>
      </Contenair>

    );
  }
}

export default Question;
