import React from "react";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function Modify(props) {
  const [noteDTO, setNoteDTO] = useState({
    num: '',
    title: '',
    content: '',
  });
  const navigate = useNavigate();
  const {num} = useParams();

  //수정한 값을 반영하는 함수
  const handleChange = (e) => {
    const {name, value} = e.target;
    setNoteDTO((prev) => ({
      ...prev,[name]: value
    }));


  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`http://localhost:8080/notes/${num}`, {
      headers: {
        'Authorization' : `Bearer ${token}`,
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


  //서버로 수정데이터를 전송하고 확인합니다
  const handleModify = (event) => {
    if (noteDTO.title == '' || noteDTO.content == '') {
      return;
    }

    const token = localStorage.getItem("token");
      axios.put(`http://localhost:8080/notes/${noteDTO.num}`,noteDTO, {
        headers: {
          'Authorization' : `Bearer ${token}`,
        }
      })
      .then((res) => {
        console.log(res.data);
        navigate(`/read/${noteDTO.num}`);
      })
      .catch((err) =>
        console.log('error', err));
    }

  return(
    <div>
      <form>
        <p><input name="num" value={noteDTO.num} readOnly/></p>
        <p><input name="title" value={noteDTO.title} onChange={handleChange} /></p>
        <p><input name="content" value={noteDTO.content} onChange={handleChange}/></p>
        <button type="button" onClick={handleModify}>수정</button>
      </form>
    </div>
  );
}

export default Modify;