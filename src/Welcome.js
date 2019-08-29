import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Topbar from "./components/topBar";
import sokina_smile from "./components/images/sokina_smile.svg";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 411px;
  height: 667px;
  margin: 0 auto;
  background: #e6ffdd;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.25);
`;

const Box = styled.div`
  width: 390px;
  align-self: center;
  margin-top: 51px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  .inner-box {
    padding: 16px 28px;
    img {
      margin: 0 auto;
    }
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
    .order-message {
      font-size: 16px;
    }
    .order-button {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      line-height: 16px;
      background: #e73948;
      width: 100%;
      height: 40px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
    }
    .change-store-info {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #4a4a4a;
      font-size: 16px;
      font-weight: 800;
      margin-top: 28px;
    }
  }
`;
class Welcome extends Component {
  render() {
    return (
      <Frame>
        <Topbar link="#" buttonText="Contact Us" />
        <Box>
          <div className="box">
            <div className="inner-box">
              <img src={sokina_smile} alt="Sokina Smile" />
              <p className="heading">Welcome to ShobHobe!</p>
              <hr className="devider" />
              <p>
                <em className="order-message">
                  Press below to unlock your dashboard
                </em>
              </p>
              <Link to="#" className="order-button">
                + Add Order
              </Link>
              <Link to="#" className="change-store-info">
                Change Store Info
              </Link>
            </div>
          </div>
        </Box>
      </Frame>
    );
  }
}

export default Welcome;
