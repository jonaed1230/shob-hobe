import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

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
      text-align: center;
      .code-input {
        margin-top: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        .input {
          text-align: center;
          font-size: 22px;
          margin: 0 12px;
          width: 40px;
          height: 40px;
          border: 2px solid #e7e7e7;
          border-radius: 4px;
          &:focus {
            outline: none;
          }
        }
        .success {
          border: 2px solid #27c278;
        }
        .wrong-code {
          border: 2px solid #FF8E8E;
        }
      }
      .resend-code {
        margin-top: 24px;
        font-size: 14px;
        color: #729fc8;
        .resend-code-link {
          text-decoration: none;
          color: #729fc8;
          font-weight: 800;
        }
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
        &:focus {
          outline: none;
        }
      }
      .correct-code {
        background-color: #ffe33f;
      }
      .false-code {
        color: #979797;
        pointer-events: none;
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

class Verify extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resendCode = this.resendCode.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const submit = document.querySelector(".submit");
    const warning = document.querySelector(".warning");
    const input = [...document.querySelectorAll(".input")];
    const arr = input.map(el => el.value);
    const value = arr.join("");
    // if given code is correct, redirect to reset-password
    if (submit.classList.contains("correct-code")) {
      this.props.history.push("reset-password");
    }
    // if input code and database code match, make submit button yellow and input box border green
    if (value === authData.data.code) {
      input.map(el => el.classList.add("success"));
      submit.classList.add("correct-code");
    } 
    // else throw error
    else {
      input.map(el => el.classList.add("wrong-code"));
      warning.innerHTML="Wrong Verification Code. Please Enter the Correct Code."
      submit.classList.add("false-code");
    }
  }
  // if anyone clicked to resend code link reload current page
  resendCode() {
    window.location.reload();
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
              Please enter the 4 digit code that has been sent to your phone to
              reset your password!
            </p>
            <hr className="devider" />
            <form onSubmit={this.handleSubmit}>
              <div className="code-input">
                <input className="input" type="tel" maxLength="1" />
                <input className="input" type="tel" maxLength="1" />
                <input className="input" type="tel" maxLength="1" />
                <input className="input" type="tel" maxLength="1" />
              </div>
              <p className="warning"></p>
              <p className="resend-code">
                Didn't receive a code?{" "}
                <Link className="resend-code-link" to="#" onClick={this.resendCode}>
                  Resend Code
                </Link>
              </p>
              <input className="submit" type="submit" value="Submit" />
            </form>
            <Link className="back-page-link" to={"/forgot-password"}>
              Back
            </Link>
          </div>
        </Box>
      </Frame>
    );
  }
}

export default Verify;
