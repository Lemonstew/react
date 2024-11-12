import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp64(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub1/아나크로니");
        }}
      >
        경로 데이터 (path variable) - 다비드 투르치
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub1/위대한_로렌초");
        }}
      >
        경로 데이터 (path variable) - 시모네 루치아니
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub2/777");
        }}
      >
        보드피아
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub2/9090");
        }}
      >
        아스모디
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub3/이탈리아");
        }}
      >
        시모네
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub3/프랑스");
        }}
      >
        브루노 카탈라
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub3/포르투갈");
        }}
      >
        비딸
      </Button>
    </div>
  );
}

export default MyApp64;
