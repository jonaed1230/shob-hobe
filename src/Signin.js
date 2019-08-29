import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import flags from "react-phone-number-input/flags";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
      .password-input {
        padding-top: 15px;
        .password-label {
          padding-left: 5px;
          font-size: 12px;
          color: #979797;
        }
      }

      .password-field {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 0 13px;
        border: 2px solid #e7e7e7;
        border-radius: 4px;
        .toggle-password {
          cursor: pointer;
        }
        .password {
          width: 80%;
          height: 60%;
          border: none;
          font-size: 16px;
          &::placeholder {
            color: #979797;
          }
          &:focus {
            outline: none;
          }
        }
      }
      .wrong-password {
        border: 2px solid #ff8e8e;
      }
      .warning {
        font-size: 12px;
        color: #ff8e8e;
      }

      /* The remember */
      .remember {
        display: flex;
        position: relative;
        padding: 16px 0;
        font-size: 14px;
        color: #729fc8;
        user-select: none;
        /* Hide the browser's default checkbox */
        .checkbox {
          position: absolute;
          opacity: 0;
          height: 0;
          width: 0;
        }
        .remember-text {
          padding-left: 5px;
        }
      }
      /* Create a custom checkbox */
      .checkmark {
        top: 0;
        left: 0;
        cursor: pointer;
        height: 16px;
        width: 16px;
        background-color: #ffffff;
        border: 2px solid #e7e7e7;
        border-radius: 4px;
        &:hover {
          background-color: #e7e7e7;
        }
      }

      /* When the checkbox is checked, add a blue background */
      .checkbox:checked ~ .checkmark {
        background-color: #ffe33f;
      }

      /* Create the checkmark/indicator (hidden when not checked) */
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      /* Show the checkmark when checked */
      .checkbox:checked ~ .checkmark:after {
        display: block;
      }

      /* Style the checkmark/indicator */
      .checkmark:after {
        left: 6px;
        top: 18px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
      .submit {
        font-family: "Apercu";
        cursor: pointer;
        color: #4a4a4a;
        font-size: 16px;
        font-weight: 800;
        width: 100%;
        height: 40px;
        background: #ffe33f;
        border: none;
        border-radius: 4px;
      }
    }
    .forgot-password-link {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #729fc8;
      font-size: 14px;
      margin-top: 18px;
    }
  }
`;

class Signin extends Component {
  constructor(props) {
    super(props);
    // states
    this.state = {
      showPassword: false,
      password: "",
      remember: false,
      numberCorrect: false,
      phone: this.props.history.location.data
    };
    // bind functions
    this.togglePassword = this.togglePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateRemember = this.updateRemember.bind(this);
  }
  // toggle password visibility
  togglePassword(e) {
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword
    });
  }
  // save password to state
  updatePassword(e) {
    var password = e.target.value;
    this.setState({
      password
    });
  }
  // toggle remember state
  updateRemember(e) {
    e.preventDefault();
    this.setState({
      remember: !this.state.remember
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var welcomePage = `welcome`;
    const warning = document.querySelector(".warning");
    const passwordField = document.querySelector(".password-field");
    // if phone number and database username match, check password, set numberCorrect true
    if (
      this.state.phone === authData.data.username ||
      this.state.phone === authData.data.usernameWithCountryCode
    ) {
      this.setState({
        numberCorrect: true
      });
      // if password is matched to database password, redirect to welcomepage after 0.5 sec
      if (this.state.password === authData.data.password) {
        setTimeout(() => {
          this.props.history.push(welcomePage);
        }, 500);
      } 
      // else throw error
      else {
        passwordField.classList.add("wrong-password");
        warning.innerHTML = "Password Incorrect! Please try again";
      }
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
                placeholder="Please enter your phone no."
                country="BD"
                onChange={phone => this.setState({ phone })}
                value={this.props.history.location.data}
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
              <div className="password-input">
                <label className="password-label">Password:</label>
                <div className="password-field">
                  <FontAwesomeIcon icon={faLock} color="#979797" />
                  <input
                    type={this.state.showPassword ? "text" : "password"}
                    className="password"
                    placeholder="Please enter your password"
                    onChange={this.updatePassword}
                    required
                  />
                  <FontAwesomeIcon
                    className="toggle-password"
                    icon={this.state.showPassword ? faEyeSlash : faEye}
                    color="#979797"
                    onClick={this.togglePassword}
                  />
                </div>
                <p className="warning"></p>
              </div>
              <label className="remember">
                <input className="checkbox" type="checkbox" />
                <span
                  className="checkmark"
                  onChange={this.updateRemember}
                  {...(this.state.remember ? "checked" : "")}
                ></span>
                <span className="remember-text">Remember me</span>
              </label>
              <input className="submit" type="submit" value="Sign in" />
            </form>
            <Link to={`forgot-password`} className="forgot-password-link">
              Forgot Password?
            </Link>
          </div>
        </Box>
      </Frame>
    );
  }
}

export default Signin;
