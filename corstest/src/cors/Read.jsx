import React from "react";
import {useState, useEffect,useRef } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";

function Read(props){

  const [noteDTO, setNoteDTO] = useState({
    num: "", title: "", content: ""
  });
  const {num} = useParams();

  const navigate = useNavigate();
  const token = useRef('');

  useEffect(() => {
    token.current = localStorage.getItem("token");
    axios.get(`http://localhost:8080/notes/${num}`, {
      headers: {
        'Authorization' : `Bearer ${token.current}`,
      }
    })
    .then((res) => {
      console.log(res.data);
      setNoteDTO(res.data);

    })
    .catch((err) => {
      console.log(err);
    })
  }, []);
  
  //삭제처리를 위한 메서드
  const handleDelete = () => {
    axios.delete(`http://localhost:8080/notes/${noteDTO.num}`,{
      headers: {
        'Authorization': `Bearer ${token.current}`,
      }
    })
    .then((res) => {
      console.log(res.data);
      navigate("/list");
    })
    .catch((err) => {
      console.log(err);
    })
  };

  return (
    <div>
      <p>num: {noteDTO.num}</p>
      <p>title: {noteDTO.title}</p>
      <p>content: {noteDTO.content}</p>
      <button onClick={()=>{navigate(`/modify/${noteDTO.num}`)}}>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default Read;