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
  &:hover{
    background: black;
    color: white;
    border-bottom: 1px solid orange;
  }
`;

class Btn extends Component {

  render() {

    return (
      <div style={{ width: '100%' }}>
        <Button onClick={this.props.setMood}>{this.props.text}</Button>
      </div>

    );
  }
}

export default Btn;
