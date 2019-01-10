import React, { Component } from 'react';
import styled from 'styled-components';

const TextBox = styled.p`
  font-weight:bold;
  color:orange;
  text-align:center;
  margin:10px 0;
`;

const TextNote = styled.p`
  font-weight:bold;
  text-align:center;
  margin:0;
`;

const TitleBox = styled.h3`
  margin:10px 0;;
  font-weight:bold;
`;

class AverageWilders extends Component {

  render() {

    return (
      <div className="col">
        <div className="row justify-content-center">
          <TitleBox>{this.props.language}</TitleBox>
        </div>
        <div className="row justify-content-center">
          <TextBox>Average</TextBox>
        </div>
        <div className="row justify-content-center">
          <TextNote>{this.props.note}/10</TextNote>
        </div>
        <div className="row justify-content-center">
          <TextBox>Today<br />register</TextBox>
        </div>
        <div className="row justify-content-center">
          <TextNote>{this.props.people} pers</TextNote>
        </div>
      </div>

    );
  }
}

export default AverageWilders;
