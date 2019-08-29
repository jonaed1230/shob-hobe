import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import Topbar from "./components/topBar";

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
      .password-input {
        margin-top: 15px;
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

      .submit {
        font-family: "Apercu";
        cursor: pointer;
        color: #4a4a4a;
        font-size: 16px;
        font-weight: 800;
        width: 100%;
        height: 40px;
        margin-top: 10px;
        background: #FFE33F;
        border: none;
        border-radius: 4px;
      }
    }
  }
`;

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    // states
    this.state = {
      showPassword: false,
      showConfirmPassword: false,
      password: "",
      confirmPassword: ""
    };
    // bind functions
    this.togglePassword = this.togglePassword.bind(this);
    this.toggleConfirmPassword = this.toggleConfirmPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateConfirmPassword = this.updateConfirmPassword.bind(this);
  }
  // make password data visible or unvisible
  togglePassword(e) {
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword
    });
  }
  // make password data visible or unvisible
  toggleConfirmPassword(e) {
    e.preventDefault();
    this.setState({
      showConfirmPassword: !this.state.showConfirmPassword
    });
  }
  // save password data to state
  updatePassword(e) {
    var password = e.target.value;
    this.setState({
      password
    });
  }
  // save password data to state
  updateConfirmPassword(e) {
    var password = e.target.value;
    this.setState({
      confirmPassword: password
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const signin = "signin";
    const warning = document.querySelector(".warning");
    const passwordField = [...document.querySelectorAll(".password-field")];
    // if both of password data match, redirect to signin page
    if (this.state.password === this.state.confirmPassword) {
      this.props.history.push(signin);
    } 
    // otherwise throw error
    else {
      passwordField.map(el => el.classList.add("wrong-password"));
      warning.innerHTML = "Passwords Didn't Match! Please Try Again";
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
              Please enter the new password then your password will be reset!
              Don't forget again. :)
            </p>
            <hr className="devider" />
            <form onSubmit={this.handleSubmit}>
              <div className="password-input">
                <label className="password-label">Password:</label>
                <div className="password-field">
                  <FontAwesomeIcon icon={faLock} color="#979797" />
                  <input
                    type={this.state.showPassword ? "text" : "password"}
                    className="password"
                    placeholder="Enter your New password"
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
              </div>
              <div className="password-input">
                <label className="password-label">Confirm Password:</label>
                <div className="password-field">
                  <FontAwesomeIcon icon={faLock} color="#979797" />
                  <input
                    type={this.state.showConfirmPassword ? "text" : "password"}
                    className="password confirm-password"
                    placeholder="Confirm your New Password"
                    onChange={this.updateConfirmPassword}
                    required
                  />
                  <FontAwesomeIcon
                    className="toggle-password"
                    icon={this.state.showConfirmPassword ? faEyeSlash : faEye}
                    color="#979797"
                    onClick={this.toggleConfirmPassword}
                  />
                </div>
                <p className="warning"></p>
              </div>
              <input className="submit" type="submit" value="Reset Password" />
            </form>
          </div>
        </Box>
      </Frame>
    );
  }
}

export default ResetPassword;
