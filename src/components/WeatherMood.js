import React, { Component } from 'react';
import styled from 'styled-components';
import base from '../base';

import WeatherMoodAll from './WeatherMoodAll';
import SingleWilder from './SingleWilder';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import sun from '../assets/img/sun.png';
import sunCloud from '../assets/img/sunCloud.png';
import storm from '../assets/img/storm.png';
import sunStorm from '../assets/img/sunStorm.png';
import rain from '../assets/img/rain.png';
import soleil from '../assets/img/soleil.jpeg';
import dead from '../assets/img/dead.jpg';

import moment from 'moment';
import 'moment/locale/fr';

const day = moment().format('dddd');
const dateMonth = moment().format('D-MMMM-YYYY');

//STYLED Components

const Contenair = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
`;

const ImageBox = styled.img`
  height:120px;
  width:120px;
`;

const Nav = styled.nav`
  width:100%;
  height:40px;
  position:absolute;
  z-index:2;
  bottom:0;
`;

const TextBox = styled.p`
  padding:10px;
  font-weight:bold;
  margin:0;
`;

const TitleThree = styled.h5`
  color:orange;
  font-weight: bold;
  letter-spacing: 3px;
  text-align:center;
  background:black;
  padding : 15px;
  border-radius:10px;
  margin-top: 25px;
  margin-bottom:10px;
`;

class WeatherMood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.userWeatherPicture = this.userWeatherPicture.bind(this);
    this.userWeatherText = this.userWeatherText.bind(this);
  }

  componentWillMount() {
    //Link base and state create a ref for all users in database
    this.ref = base.syncState(`${localStorage.getItem('WeatherOfWilders')}`, {
      context: this,
      state: 'user',
    });
  }

  // componentDidMount(){
  //     window.addEventListener('scroll', this.handleScroll);
  // }

  componentWillUnmount() {
    base.removeBinding(this.ref);
    //     window.removeEventListener('scroll', this.handleScroll);
  }

  // handleScroll(event){
  //     console.log(event);

  // }

  userWeatherPicture() {
    const { user } = this.state;
    const pictures = { 11: soleil, 10: sun, 9: sun, 8: sunCloud, 7: sunCloud, 6: sunStorm, 5: sunStorm, 4: rain, 3: rain, 2: storm, 1: storm, 0: dead };
    if (user[day]) {
      const mood = user[day][dateMonth];
      return mood ? <ImageBox src={pictures[mood]}></ImageBox> : <div></div>;
    }
  }

  userWeatherText() {

    const { user } = this.state;
    const pictures = {
      11: 'Tu irradies de bonheur, petit wilder',
      10: 'Sudo rm -rf wilder/worries',
      9: 'Sudo rm -rf wilder/worries',
      8: 'Prends un petit carreau de chocolat, ça ira mieux !',
      7: 'Prends un petit carreau de chocolat, ça ira mieux !',
      6: 'Ce n\'est pas grave, même la lune à un côté obscur !!!',
      5: 'Ce n\'est pas grave, même la lune à un côté obscur !!!',
      4: 'Serais-tu un peu ronchonchon ?',
      3: 'Serais-tu un peu ronchonchon ?',
      2: 'Houlala, mieux ne vaut pas te croiser aujourd\'hui !',
      1: 'Houlala, mieux ne vaut pas te croiser aujourd\'hui !',
      0: 'La production de walking Dead, te propose un rôle :)',
    };
    if (user[day]) {
      const mood = user[day][dateMonth];
      return mood ? <TextBox>{pictures[mood]}</TextBox> : <div></div>;
    }
  }

  render() {

    return (
      <Contenair>

        <div className="col">
          <div className="row">
            <div className="tab-content col" id="myTabContent">
              <div className="tab-pane fade show active" id="user" role="tabpanel" aria-labelledby="user-tab">
                <div className="row justify-content-center">
                  <div className="col">
                    <div className="row justify-content-center">
                      <TitleThree>My Mood</TitleThree>
                    </div>
                    <div className="row justify-content-center">
                      <p style={{ textAlign: 'center' }}>{this.state.user.name}</p>
                    </div>
                    <div className="row align-items-center">
                      <div className="col">
                        <div className="row justify-content-center">
                          {this.userWeatherPicture()}
                        </div>
                      </div>
                      <div className="col">
                        <div className="row justify-content-center">
                          {this.userWeatherText()}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="row justify-content-center">
                          <TitleThree>Wilder's Mood</TitleThree>
                        </div>
                        <WeatherMoodAll />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="js" role="tabpanel" aria-labelledby="js-tab">
                <div className="row">
                  <SingleWilder name="JS" />
                </div>
              </div>
              <div className="tab-pane fade" id="php" role="tabpanel" aria-labelledby="php-tab">
                <div className="row">
                  <SingleWilder name="PHP" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Nav>
          <ul className="nav nav-pills nav-fill" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link" id="js-tab" data-toggle="tab" href="#js" role="tab" aria-controls="js" aria-selected="false">JS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" id="user-tab" data-toggle="tab" href="#user" role="tab" aria-controls="user" aria-selected="true">
                <FontAwesomeIcon icon="user" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="php-tab" data-toggle="tab" href="#php" role="tab" aria-controls="php" aria-selected="false">PHP</a>
            </li>
          </ul>
        </Nav>
      </Contenair>

    );
  }
}

export default WeatherMood;
