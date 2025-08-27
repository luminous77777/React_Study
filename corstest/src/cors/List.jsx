import React from "react";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {decode} from "base-64";
import axios from "axios";

function List(props) {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  let email = "";
  let token = "";

  useEffect(() =>{
    token = localStorage.getItem("token");
    if(token){
      const tokenParts = token.split(".");
      const payload = tokenParts[1];
      const decodePayload = decode(payload);
      const payloadObj = JSON.parse(decodePayload);

      email = payloadObj.sub;

      if (email === ""){
        navigate("/"); //email이 없을때 로그인 페이지로 이동
      }
    }
    else {
      navigate("/"); //토큰이 없을때 로그인페이지로 이동
    }
  },[])


  useEffect(() => {
    //Header, Payload, Signature
      axios.get(`http://localhost:8080/notes/all?email=${email}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      .then(res => {
        console.log(res.data);
        setList(res.data)
      })
      .catch(error => {
        console.log('error: ',error);
      });
  }, []);

  return (
    <div>
      <table className="table table-hover">
        <thead>
        <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
        </tr>
        </thead>
        <tbody>
        {list.map((dto) =>
          <tr key={dto.num} onClick={() =>{
            navigate(`/read/${dto.num}`);
          }}>
            <td>{dto.num}</td>
            <td>{dto.title}</td>
            <td>{dto.writerEmail}</td>
          </tr>
        )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">
              <button onClick={() => {navigate('/register')}}>글작성</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default List;