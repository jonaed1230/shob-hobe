import React, { Component } from "react";
import logo from "./images/logo.svg";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding: 0 10.5px;
  img {
    transform: rotate(-0.89deg);
  }
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #4a4a4a;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  background: #ffffff;
  width: 111px;
  height: 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
class Topbar extends Component {
  render() {
    return (
      <Header>
        <img src={logo} alt="Logo" />
        <Button href={this.props.link}>{this.props.buttonText}</Button>
      </Header>
    );
  }
}

export default Topbar;
