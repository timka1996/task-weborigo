import React from "react";
import "./down.css";
import Item from "./Item";
import img1 from "../../assets/1.jfif";
import img2 from "../../assets/2.jfif";
import img3 from "../../assets/3.jfif";
import img4 from "../../assets/4.jfif";
import img5 from "../../assets/5.jfif";
import img6 from "../../assets/6.jfif";
import img7 from "../../assets/7.jfif";
import img8 from "../../assets/8.jfif";
import img9 from "../../assets/9.jfif";
import img10 from "../../assets/10.jfif";
import img11 from "../../assets/11.jfif";
import img12 from "../../assets/12.jfif";

export default function Down() {
  const data = [
    {
      id: 1,
      img: img1,
      serbian: "srećan",
      english: "happy",
    },
    {
      id: 2,
      img: img2,
      serbian: "lijepo",
      english: "nice",
    },
    {
      id: 3,
      img: img3,
      serbian: "prijatelju",
      english: "friend",
    },
    {
      id: 4,
      img: img4,
      serbian: "eksplozija",
      english: "explosion",
    },
    {
      id: 5,
      img: img5,
      serbian: "šargarepa",
      english: "carrot",
    },
    {
      id: 6,
      img: img6,
      serbian: "auto",
      english: "car",
    },
    {
      id: 7,
      img: img7,
      serbian: "vojnik",
      english: "soldier",
    },
    {
      id: 8,
      img: img8,
      serbian: "strah",
      english: "fear",
    },
    {
      id: 9,
      img: img9,
      serbian: "relativnost",
      english: "relativy",
    },
    {
      id: 10,
      img: img10,
      serbian: "knjiga",
      english: "book",
    },
    {
      id: 11,
      img: img11,
      serbian: "Zemlja",
      english: "Earth",
    },
    {
      id: 12,
      img: img12,
      serbian: "ograničenje brzine",
      english: "speed limit",
    },
  ];
  return (
    <div className="down d-flex">
      {data.map((e) => (
        <Item img={e.img} serbian={e.serbian} english={e.english} key={e.id} />
      ))}
    </div>
  );
}
