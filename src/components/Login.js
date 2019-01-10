import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';

//STYLED Components
const Button = styled.button`
  background: transparent;
  border: 2px solid orange;
  border-radius: 5px;
  font-size: 20px;
  color: orange;
  width: 250px;
  height: 50px;
  &:hover {
    background: orange;
    color: white;
    transition: 0.8s;
  }
`;

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.logIn = this.logIn.bind(this);
  }

  logIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        localStorage.setItem('WilderLanguage', this.props.language);
        localStorage.setItem('connected', true);
      })
      .catch(error => console.error(error));
  }

  render() {

    return <Button onClick={this.logIn}>Rejoindre</Button>;

  }
}

export default Login;
