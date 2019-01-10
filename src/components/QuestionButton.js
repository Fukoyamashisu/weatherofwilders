import React, { Component } from 'react';
import styled from 'styled-components';

const CubeTouch = styled.div`
  height: 70px;
  width: 100px;
  font-size:16px;
  font-weight:bold;
  display:flex;
  justify-content:center;
  align-items:center;
  color:orange;
  background:black;
  cursor:pointer;
  transition:0.8s;
  &:hover{
      background:orange;
      color:black;
  }
  `;

class QuestionButton extends Component {

  render() {

    return (
      <div>
        <CubeTouch onClick={e => this.props.showTemp(e)}>{this.props.text}</CubeTouch>
      </div>

    );
  }
}

export default QuestionButton;
