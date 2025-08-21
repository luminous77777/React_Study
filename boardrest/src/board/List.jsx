import React, {useState, useEffect} from 'react';
import axios from 'axios';//서버에서 데이터만 가져올때 사용하는 객체
import {useNavigate} from 'react-router-dom';


function List(props) {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

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
      <table className="table table-hover">
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>글쓴이</th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(list?.list) && list.list.map((dto)=>{
          return <tr onClick={(res) => {
            navigate(`/read?bno=${dto.bno}`);
          }} className="clickpoint">
            <td>{dto.bno}</td>
            <td>{dto.title}</td>
            <td>{dto.writerName}</td>
          </tr>
        })}
        </tbody>
        <tfoot>
          <tr>
            <button type="button" className="btn btn-primary" onClick={(event) =>{
              event.preventDefault();
              navigate('/register')
            }}>글쓰기</button>
          </tr>
        </tfoot>
      </table>
  );

}

export default List;