import React, { useState } from "react";

function MyApp70(props) {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);
  const handleClick = () => {
    axios.postForm("/api/main8/sub3", {
      title: title,
      files: files,
    });
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="file"
        multiple // boolean 값이며 true값을 받고 있음
        onChange={(e) => setFiles(e.target.files)}
      />
      <br />
      <button>send</button>
    </div>
  );
}

export default MyApp70;
