import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import flags from "react-phone-number-input/flags";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

import Topbar from "./components/topBar";
import authData from "./components/authData.json";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 411px;
  height: 700px;
  margin: 0 auto;
  background: #ffe7e9;
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
      .heading-text {
        padding-left: 17px;
      }
    }
    .sub-heading {
      font-size: 12px;
      color: #979797;
    }
    .devider {
      height: 0;
      border-top: 1px solid #e7e7e7;
    }
    img {
      margin: 0 auto;
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
      .green-check-mark {
        position: absolute;
        margin-left: 305px;
        margin-top: -30px;
        font-size: 18px;
      }
      .wrong-password {
        border: 2px solid #ff8e8e;
      }
      .warning {
        font-size: 12px;
        color: #ff8e8e;
      }

      .submit {
        font-family: "Apercu";
        cursor: pointer;
        color: #4a4a4a;
        font-size: 16px;
        font-weight: 800;
        width: 100%;
        height: 40px;
        margin-top: 28px;
        background: #e7e7e7;
        border: none;
        border-radius: 4px;
      }
      .correct-number {
        background-color: #ffe33f;
      }
      .wrong-number {
        color: #979797;
      }
    }
    .back-page-link {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #979797;
      font-size: 14px;
      margin-top: 18px;
    }
  }
`;

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    // states
    this.state = {
      phone: "",
      numberCorrect: false
    };
    // bind functions
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var phoneNumber = this.state.phone;
    const submit = document.querySelector(".submit");
    const error = document.querySelector(".warning");
    const verify = "verify";
    const phoneNumberField = document.querySelector(
      ".react-phone-number-input"
    );
    // on form submit set phone state to phoneNumber
    this.setState({
      phone: phoneNumber
    });
    // if phone number is eqal to username that comes from database redirect to verification page
    if (
      phoneNumber === authData.data.username ||
      phoneNumber === authData.data.usernameWithCountryCode
    ) {
      this.setState({
        numberCorrect: true
      });
      if (submit.classList.contains("correct-number")) {
        this.props.history.push(verify);
      }
      submit.classList.add("correct-number");
      error.innerHTML = "";
      phoneNumberField.classList.remove("wrong-password");
    }
    // else throw error and reload current window after 1 sec
    else {
      this.setState({
        numberCorrect: false
      });
      submit.classList.add("wrong-number");
      error.innerHTML =
        "This number does not exist in our system.</br>Enter another number or Sign Up!";
      phoneNumberField.classList.add("wrong-password");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }
  render() {
    return (
      <Frame>
        <Topbar link="#" buttonText="Contact Us" />
        <Box>
          <div className="inner-box">
            <p className="heading">
              <FontAwesomeIcon icon={faLock} />
              <span className="heading-text">Forgot your Password?</span>
            </p>
            <hr className="devider" />
            <p className="sub-heading">
              Confirm your phone number to receive a verification code.
            </p>
            <hr className="devider" />
            <form onSubmit={this.handleSubmit}>
              <label className="phone-no">
                <span>Phone No:</span>
              </label>
              <PhoneInput
                flags={flags}
                placeholder="Please enter your phone no."
                country="BD"
                onChange={phone => this.setState({ phone })}
                required
              />
              <span>
                {this.state.numberCorrect ? (
                  <FontAwesomeIcon
                    className="green-check-mark"
                    icon={faCheckCircle}
                    color="#27C278"
                  />
                ) : (
                  ""
                )}
              </span>
              <p className="warning"></p>
              <input
                className="submit"
                type="submit"
                value="Send Verification Code"
              />
            </form>
            <Link className="back-page-link" to={`/signin`}>
              Back
            </Link>
          </div>
        </Box>
      </Frame>
    );
  }
}

export default ForgotPassword;
