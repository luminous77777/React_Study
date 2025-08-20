import React, {useState, useEffect} from "react";
import axios from "axios";

function Sample2(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    //axios는 데이터를 자동으로, json화 해준다
    axios.get(`https://my-json-server.typicode.com/typicode/demo/posts`)
    .then((res) => {
      console.log("Content-Type",res.headers["content-type"]);
      setData(res.data)
    })
    .catch((err) => {
      console.log("error", err);
    })
  },[]);


  //데이터가없을때 방지하는 코드 data
  return (
    <div>
      <h1>API (AXIOS)</h1>
      {data && data.map((d) => {
        return <p key={d.id}>{d.id} : {d.title}</p>
      })}
    </div>
  );
}

export default Sample2;