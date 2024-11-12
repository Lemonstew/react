import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp65(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/api/main5/sub1").then((response) => {
            console.log(response);
          });
        }}
      >
        btn1
      </Button>
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub1")
            .then((response) => response.data)
            .then((data) => console.log(data));
        }}
      >
        btn2
      </Button>

      <Button
        onClick={() => {
          axios
            .get("api/main5/sub3")
            .then((a) => a.data)
            .then((data) => console.log(data));
        }}
      ></Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub4")
            .then((a) => a.data)
            .then((d) => {
              console.log(d);
              console.log(d.name);
              console.log(d.age);
            });
        }}
      >
        btn 4
      </Button>
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub5")
            .then((a) => a.data)
            .then((d) => {
              console.log(d.title);
              console.log(d.designer);
              console.log(d.content);
              console.log(d.raiting);
              console.log(d.weight);
              console.log(d.price);
            });
        }}
      >
        Barrage
      </Button>
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub6")
            .then((r) => r.data)
            .then((d) => {
              console.log(d.name);
              console.log(d.items[0]);
              console.log(d.items[1]);
              console.log(d.items[2]);
              console.log(d.team[0]);
              console.log(d.team[1]);
            });
        }}
      >
        손흥민
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub7")
            .then((r) => r.data)
            .then((d) => {
              console.log(d.product.name);
              console.log(d.product.price);
              console.log(d.company.location[0]);
              console.log(d.company.location[1]);
              console.log(d.product.quantity);
            });
        }}
      ></Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub8")
            .then((res) => res.data)
            .then((data) => console.log(data));
        }}
      ></Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub9")
            .then((a) => a.data)
            .then((d) => {
              console.log(d.name);
              console.log(d.address);
              console.log(d.married);
              console.log(d.items[0]);
              console.log(d.items[1]);
              console.log(d.company.name);
              console.log(d.company.location);
            });
        }}
      ></Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub10")
            .then((res) => res.data)
            .then((data) => {
              console.log(data[0].title);
              console.log(data[0].author);
              console.log(data[0].content);
              console.log(data[0].price);

              console.log(data[1].title);
              console.log(data[1].author);
              console.log(data[1].content);
              console.log(data[1].price);

              console.log(data[2].title);
              console.log(data[2].author);
              console.log(data[2].content);
              console.log(data[2].price);
            });
        }}
      ></Button>
    </div>
  );
}

export default MyApp65;
