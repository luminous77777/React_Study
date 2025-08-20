import React,{useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Board(props){
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/boardrest/list`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) =>{
      console.log("error:", err);
    })
  },[])

  return (
    <div>
      <h1>BoardList</h1>
      <button onClick={() => {
        navigate("/reply/100");
      }}>페이지 이동 테스트</button>

      <ul>
      {Array.isArray(data?.list) && data.list.map((item) => {
        return <li key={item.bno} name={item.bno} onClick={(event)=> {
          navigate(`reply/${item.bno}`)
        }}>{item.title}</li>
      })}
      </ul>
    </div>
  );
}

export default Board;