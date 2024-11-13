import React, { useState } from "react";
import axios from "axios";

function MyApp69(props) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [file, setFile] = useState(undefined);

  const handleClick = () => {
    // file 전송 시 postForm 사용 (파일은 request parameter로 보내기 때문)
    axios.postForm("/api/main8/sub1");
  };
  return (
    <div>
      <input
        placeholder={"city"}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      <input
        placeholder={"country"}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <br />
      <input
        type="file"
        value={file}
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <button onClick={handleClick}>send</button>
    </div>
  );
}

export default MyApp69;
