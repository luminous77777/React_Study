import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function List(props) {
  const [list, setList] = useState(null);

  //List컴포넌트가 생성될때 한번만 호출하도록 구성
  useEffect(() => {
    axios.get('boardrest/list')
    .then((res)=>{
      setList(res.data);
    })
    .catch((err)=>{
      console.log("error:",err);
    });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>글쓴이</th>
        </tr>
      </thead>
      <tbody>
      {Array.isArray(list?.list) && list.list.map((dto)=>{
        return <tr>
          <td>{dto.bno}</td>
          <td>{dto.title}</td>
          <td>{dto.writerName}</td>
        </tr>
      })}
      </tbody>
    </table>
  );

}

export default List;