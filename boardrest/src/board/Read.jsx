import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import axios from 'axios';

function Read(props) {
  const { dto, setDto } = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    //쿼리스트링의 값을 가져온다
    console.log(location);
    console.log(queryParams.toString())
    const bno = queryParams.get('bno');// 쿼리스트링에서 bno값 가지고 오기

    axios.get(`boardrest/read?${queryParams.toString()}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    });
  },[]);

  return (
    <div>

    </div>
  );
}

export default Read;