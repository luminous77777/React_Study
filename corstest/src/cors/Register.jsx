import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {decode} from "base-64";

function Register(props) {

  const [noteDTO, setNoteDTO] = useState({
    title: "", content: "", writerEmail: ""
  });

  const navigate = useNavigate();

  let email = "";
  let token = "";

  useEffect(() => {
    token = localStorage.getItem("token");
    if (token) {
      const tokenParts = token.split(".");
      const payload = tokenParts[1];
      const decodePayload = decode(payload);
      const payloadObj = JSON.parse(decodePayload);

      email = payloadObj.sub;

      if (email === "") {
        navigate("/"); //email이 없을때 로그인 페이지로 이동
      } else {
        // const newData = {
        //   title: noteDTO.title, content:noteDTO.content, writerEmail: email
        // }
        // setNoteDTO(newData);
        setNoteDTO((prevForm) => {
          return {...prevForm, "writerEmail": email};
        });
      }
    } else {
      navigate("/"); //토큰이 없을때 로그인페이지로 이동
    }
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    if (noteDTO.title == "" || noteDTO.content == "") {
      return;
    }
    axios.post('http://localhost:8080/notes/', noteDTO, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      console.log(res);
      navigate("/list");
    })
    .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNoteDTO((prevForm) => {
      return {...prevForm, [name]: value};
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p><input name="title" value={noteDTO.title} onChange={handleChange}/></p>
        <p><input name="content" value={noteDTO.content} onChange={handleChange}/></p>
        <p><input name="writerEmail" value={noteDTO.writerEmail} readOnly/></p>
        <p>
          <button>등록</button>
        </p>
      </form>
    </div>
  );
}

export default Register;