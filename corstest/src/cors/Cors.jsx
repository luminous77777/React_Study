import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";

function Cors(props) {

  const [data,setData] = useState();

  const handleClick = () => {
    axios.get("http://localhost:8080/notes/7"
    .then(function(resp) {

    })
    .catch((error) => {
      console.log(error);
    }))
  }

  return(
    <div>
      <button onClick={handleClick}>CROS확인</button>
      <p>{data}</p>
    </div>
  );
}

export default Cors;