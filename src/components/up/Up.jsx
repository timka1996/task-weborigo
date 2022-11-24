import React from "react";
import "./up.css";
import logo from "../../assets/logo.png";
import img from "../../assets/1.jfif";

import { TbThumbUp } from "react-icons/tb";
import { TbThumbDown } from "react-icons/tb";

export default function Up() {
  return (
    <div className="up d-flex">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="layer">
        <div className="likes-sm">
          <div className="like">
            <TbThumbUp /> <span>4/20</span>
          </div>
          <div className="dislike">
            <TbThumbDown /> <span>16/20</span>
          </div>
        </div>
        <div className="up__image">
          <img src={img} alt="img" />
        </div>
        <h4 className="text-center">happy</h4>
        <input type="text" />
        <button>Let's see</button>
        <div className="likes">
          <div className="like">
            <TbThumbUp /> <span>4/20</span>
          </div>
          <div className="dislike">
            <TbThumbDown /> <span>16/20</span>
          </div>
        </div>
      </div>
    </div>
  );
}
