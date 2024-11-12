import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp63(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/api/main3/sub1");
        }}
      >
        get 1
      </Button>
      <Button
        onClick={() => {
          axios.post("/api/main3/sub2", { name: "son", age: 99 });
        }}
      ></Button>
      <Button
        onClick={() => {
          axios.put("/api/main3/sub3");
        }}
      ></Button>
      <Button
        onClick={() => {
          axios.put("/api/main3/sub4", { title: "title", author: "author" });
        }}
      ></Button>

      <Button
        onClick={() => {
          axios.delete("/api/main3/sub5");
        }}
      >
        delete1
      </Button>
      <Button
        onClick={() => {
          axios.delete("/api/main3/sub6", {
            data: {
              id: 5,
              name: "kim",
            },
          });
        }}
      >
        delete (w/ json)
      </Button>
      <Button
        onClick={() => {
          axios.put(
            "/api/main3/sub7",
            {
              name: "Gloomhaven",
              designer: "isaac",
              weight: "middle-high",
              raiting: 8.6,
            },
            {
              name: "the Feast for Odin",
              designer: "uwe",
              weight: "middle-high",
              raiting: 8.2,
            },
            {
              name: "Lorenzo Il Magnifico",
              designer: "Simone",
              weight: "middle",
              raiting: 7.8,
            },
            { name: "Brass", designer: "Martin", weight: "high", raiting: 8.6 },
          );
        }}
      ></Button>

      <Button
        onClick={() => {
          axios.delete("/api/main3/sub8", {
            data: { name: "Anachrony", designer: "David" },
          });
        }}
      >
        del8
      </Button>
    </div>
  );
}

export default MyApp63;
