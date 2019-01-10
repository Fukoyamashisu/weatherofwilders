import React, { Component } from 'react';
import loader from '../assets/img/loader.gif';
import firebase from 'firebase';
import base from '../base';

import moment from 'moment';
import 'moment/locale/fr';

const day = moment().format('dddd');
const dateMonth = moment().format('D-MMMM-YYYY');

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
    };
    this.checkUserInDatabase = this.checkUserInDatabase.bind(this);
    this.createUser = this.createUser.bind(this);
    this.redirect = this.redirect.bind(this);
    this.setYourMood = this.setYourMood.bind(this);
  }

  componentWillMount() {
    this.ref = base.syncState('/', {
      context: this,
      state: 'users',
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        const uid = user.uid;
        localStorage.setItem('WeatherOfWilders', user.uid);
        this.checkUserInDatabase(user, uid);
      }
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  checkUserInDatabase(user, uid) {
    firebase
      .database()
      .ref(uid)
      .once('value')
      .then((snapshot) => {
        if (!snapshot.val()) {
          const currentUser = {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            language: localStorage.getItem('WilderLanguage'),
          };
          this.createUser(currentUser, uid);
        }
        this.setYourMood(uid);
      });
  }

  createUser(currentUser, uid) {
    const { users } = this.state;
    users[uid] = currentUser;
    this.setState({ users: users });

  }

  redirect(str) {
    this.props.history.push(str);
  }

  setYourMood(uid) {
    firebase
      .database()
      .ref(`${uid}/${day}/${dateMonth}`)
      .once('value')
      .then((snapshot) => {
        if (snapshot.val()) {

          this.redirect('/weatherofwilders');
        }

        this.redirect('/setyourmood');
      });
  }

  render() {

    return (
      <div className="container">
        <img src={loader} alt="" style={{ maxWidth: '100%' }} />
      </div>

    );
  }
}

export default Loader;
