import React, { Component } from 'react';
import base from '../base';
import Styled from 'styled-components';

import moment from 'moment';
import 'moment/locale/fr';

const day = moment().format('dddd');
const dateMonth = moment().format('D-MMMM-YYYY');

const WilderBox = Styled.div`
    background:black;
    border-bottom: 1px solid orange;
    height:60px;
    display:flex;
    align-items:center;
`;
const WilderName = Styled.p`
    color:orange;
    margin:0 15px;
    font-weight:bold;
`;
const WilderNote = Styled.p`
    color:orange;
    margin:0 15px;
`;

class SingleWilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
    };
    this.wilder = this.wilder.bind(this);
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

  wilder(language) {
    const { users } = this.state;
    const js = Object.values(users).map(el => el.language === language ? el : null).filter(el => el !== null);
    const note = js.map((el, key) => {
      if (el[day]) {
        return el[day].hasOwnProperty(dateMonth)

          ? (<WilderBox className="row" key={key}>
            <WilderName className="p-2">{el.name}</WilderName>
            <WilderNote className="ml-auto p-2">{el[day][dateMonth] === 11 ? 10 : el[day][dateMonth]} / 10</WilderNote>
          </WilderBox>) : null;
      }
      return null;
    }).filter(el => el !== null);
    return note;

  }

  render() {

    return (
      <div className="col">
        {this.wilder(this.props.name)}
      </div>

    );
  }
}

export default SingleWilder;
