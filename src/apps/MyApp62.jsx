import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp62(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub1", { name: "son", age: 99 });
        }}
      ></Button>

      <Button
        onClick={() => {
          axios.post("/api/main2/sub2", {
            title: "walk to remember",
            author: "nicholas sparks",
            content: "romance",
            price: 8,
            quantity: "100E",
          });
        }}
      ></Button>

      <Button
        onClick={() => {
          axios.post("/api/main2/sub3", {
            name: "son",
            age: 99,
            married: true,
            items: ["coffee", "milk", "cola"],
            team: {
              name: "ㅌㅌㄴ",
              location: "london",
            },
          });
        }}
      ></Button>

      <Button
        onClick={() => {
          axios.post("/api/main2/sub4", {
            id: 32,
            name: "Arnak",
            available: false,
            shops: ["HYUNDAI", "SINSAEGAE"],
            attributes: { name: "hello", value: "nice to meet u." },
          });
        }}
      >
        btn4
      </Button>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub5", ["coffee", "latte", "mocha"]);
        }}
      >
        btn5
      </Button>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub6", [
            { name: "Arnak", designer: "Min" },
            { name: "on mars", designer: "vital" },
            { name: "gloomhaven", designer: "isaac" },
          ]);
        }}
      ></Button>

      <Button
        onClick={() => {
          axios.post("/api/main2/sub7", [
            {
              title: "오만과 편견",
              author: "제인 오스틴",
              content: "고전문학",
              price: 8,
              quantity: "10e",
            },
            {
              title: "햄릿",
              author: "셰익스피어",
              content: "고전문학",
              price: 9,
              quantity: "30e",
            },
            {
              title: "노인과 바다",
              author: "헤밍웨이",
              content: "고전문학",
              price: 7,
              quantity: "50e",
            },
          ]);
        }}
      ></Button>
    </div>
  );
}

export default MyApp62;
