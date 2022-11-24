import React from "react";

export default function Item({ img, serbian, english }) {
  return (
    <div className="word__item">
      <div className="words">
        <div className="serbian">
          <h3 className="text-center">Serbian</h3>
          <p className="text-center">{serbian}</p>
        </div>
        <div className="english">
          <h3 className="text-center">English</h3>
          <p className="text-center">{english}</p>
        </div>
      </div>
      <div className="img__container">
        <img src={img} alt="img" />
      </div>
    </div>
  );
}
