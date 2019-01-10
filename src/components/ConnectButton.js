import React, { Component } from 'react';
import styled from 'styled-components';

//STYLED Components
const Button = styled.button`
  background: orange;
  border:inherit;
  font-size: 20px;
  color: white;
  transition: 0.8s;
  width:100%;
  height: 40px;
  margin-bottom: 20px;
  border-radius: 5px;
  &:hover{
    background: black;
    color: white;
    border-bottom: 1px solid orange;
  }
`;

class ConnectButton extends Component {

  render() {

    return (
      <div>
        <Button onClick={e => this.props.selectLanguage(e)}>{this.props.text}</Button>
      </div>

    );
  }
}

export default ConnectButton;
