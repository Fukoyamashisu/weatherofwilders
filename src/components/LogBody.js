import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';
import Login from './Login';
import ConnectButton from './ConnectButton';

//STYLED Components

const TitleThree = styled.h3`
  color:black;
  font-weight: bold;
  letter-spacing: 3px;
  font-size:23px;
  margin-bottom:20px;
`;

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

//CLASS CONNECTION CONNECT
class LogBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: localStorage.getItem('WilderLanguage'),
      choose: false,
    };
    const connected = localStorage.getItem('connected');
    if (connected) {
      this.props.history.push('/loading');
    }
    this.selectLanguage = this.selectLanguage.bind(this);
  }

  selectLanguage(e) {

    this.setState({ language: e.target.innerText, choose: true });
  }

  render() {

    return (
      <Container>
        <div className="col">
          <div className="row justify-content-center">
            <img src={logo} alt="BornToBeWild" style={{ width: '200px', height: '200px', marginBottom: '40px' }} />
          </div>
          <div className="row justify-content-center">
            <TitleThree>Weather<span style={{ color: 'orange' }}>Of</span>Wilders !</TitleThree>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              {!this.state.language &&
              <ConnectButton selectLanguage={this.selectLanguage} text="JS" />
              }
            </div>
            <div className="col">
              {!this.state.language &&
              <ConnectButton selectLanguage={this.selectLanguage} text="PHP" />
              }
            </div>
          </div>
          <div className="row justify-content-center">
            <Login language={this.state.language} />
          </div>
        </div>
      </Container>

    );
  }
}

export default LogBody;
