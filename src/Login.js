import React, { Component } from "react";
import styled from "styled-components";
import flags from "react-phone-number-input/flags";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import Topbar from "./components/topBar";
import image from "./components/images/sokina.svg";
import authData from "./components/authData.json";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 411px;
  height: 700px;
  margin: 0 auto;
  background: #fcfcfc;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.25);
`;

const Box = styled.div`
  align-self: center;
  width: 390px;
  margin-top: 51px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  .inner-box {
    padding: 16px 28px;
    .heading {
      font-size: 24px;
      color: #4a4a4a;
      font-weight: 800;
      margin: 16px 0;
    }
    .devider {
      height: 0;
      border-top: 1px solid #E7E7E7;
    }
    form {
      text-align: left;
      .phone-no {
        padding-left: 5px;
        font-size: 12px;
        color: #979797;
      }
      .react-phone-number-input {
        display: flex;
        align-items: center;
        height: 40px;
        border: 2px solid #e7e7e7;
        border-radius: 4px;
        .react-phone-number-input__row {
          width: 100%;
          padding: 0 13px;
        }
      }
      .react-phone-number-input__input {
        border: none;
        &::placeholder {
          color: #979797;
        }
      }
      .submit {
        font-family: "Apercu";
        margin-top: 20px;
        cursor: pointer;
        color: #4a4a4a;
        font-size: 16px;
        font-weight: 800;
        width: 100%;
        height: 40px;
        background: #E7E7E7;
        border: none;
        border-radius: 4px;
      }
    }
  }
  img {
    margin: 0 auto;
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let signin = `signin`;
    let signup = `signup`;
    // if input phone number matched to database username redirect to signin page with phone number
    if (
      this.state.phone === authData.data.username ||
      this.state.phone === authData.data.usernameWithCountryCode
    ) {
      this.props.history.push({
        pathname: signin,
        data: this.state.phone
      });
    } 
    // else redirect to signup page
    else {
      this.props.history.push(signup);
    }
  }
  render() {
    return (
      <Frame>
        <Topbar link="#" buttonText="Contact Us" />
        <Box>
          <div className="inner-box">
            <img src={image} alt="Power Ups sokina" />
            <p className="heading">Enter the ShobHobe Universe!</p>
            <hr className="devider" />
            <form onSubmit={this.handleSubmit}>
              <label className="phone-no">
                <span>Phone No:</span>
              </label>
              <PhoneInput
                flags={flags}
                country="BD"
                placeholder="Please enter your phone no."
                onChange={phone => this.setState({ phone })}
                required
              />
              <input
                className="submit"
                type="submit"
                value="Sign in/ Sign Up"
              />
            </form>
          </div>
        </Box>
      </Frame>
    );
  }
}

export default Login;
