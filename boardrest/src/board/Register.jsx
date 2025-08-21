import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";


function Register(props) {

  const [form, setForm] = useState({ //키값으로 초기값을 정한다
    title:'', content:'',writerEmail:''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const {name, value} = event.target;
    //기존 form에 있는 데이터를 복제하고 값을 변경후
    //setForm을 통해서 변경된 전체 데이터를 넣어줍니다

    setForm((prevForm) => ({
      ...prevForm, [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //리액트에서는 form의 action으로 이동하지않고 react-dom-router를 통해서 페이지 이동
    //데이터가 있는지 검사
    if(!form.title || !form.content || !form.writerEmail) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    axios.post('/boardrest/register',form)
    .then((res)=> {
      console.log("받은데이터 : ", res.data);
    })
    .catch((error)=> {
      console.log(error);
    });

    navigate('/');//글 등록후 리스트로 이동
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control"
                 onChange={handleChange} value={form.title}
                 id="title" name="title" placeholder="Enter Title"/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control"
                    onChange={handleChange} value={form.content}
                    id="content" name="content" rows="5"></textarea>
        </div>
        <div className="form-group">
          <label>writerEmail</label>
          <input type="text" className="form-control"
                 onChange={handleChange} value={form.writerEmail}
                 id="writerEmail" name="writerEmail" placeholder="writerEmail"/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Register;