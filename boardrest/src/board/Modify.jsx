import React, {useState, useEffect, useRef} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import axios from 'axios';


function Modify(props) {
  const [dto, setDto] = useState({bno: '', title: '', content: '', writerName: '', regDate:'', modDate:''});

  const navigate = useNavigate();
  const location = useLocation();
  let initDto = useRef(null);

  const handleChange = (event) => {
    const {name, value} = event.target;

    setDto((prevForm) => ({
      ...prevForm, [name]: value
    }));
  }
  const handleClick = (event) => {
    event.preventDefault(); //리액트에서는 form의 action으로 이동하지않고 react-dom-router를 통해서 페이지 이동
    //데이터가 있는지 검사
    if (!dto.title || !dto.content) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    axios.post(`/boardrest/modify`, dto)
    .then((res) => {
      console.log("받은데이터 : ", res.data);
      navigate(`/read?bno=${dto.bno}`);
    })
    .catch((error) => {
      console.log(error);
    });


  }


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    //쿼리스트링의 값을 가져온다
    console.log(location);
    console.log(queryParams.toString())
    const bno = queryParams.get('bno');// 쿼리스트링에서 bno값 가지고 오기

    axios.get(`boardrest/read?${queryParams.toString()}`)
    .then((res) => {
      console.log(res.data);
      setDto(res.data);
      if(initDto.current == null) {
        initDto.current =JSON.parse(JSON.stringify(res.data));
      }

    })
    .catch((error)=>{
      console.log(error);
    });
  },[]);

  const formatDate = (dateString) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    //유효한날짜인지 확인
    if (isNaN(date.getTime())) return '';
    const year = date.getFullYear();//4자리 연도가 리턴
    const month = String(date.getMonth() + 1).padStart(2, '0');
    //자바스크립트에서 월은 0~11을 리턴하므로 1을 더해야한다
    //padStart는 두자리로 변경하는데 비어있는곳을 두번째 파라매터(0)으로 채운다
    const day = String(date.getDate()).padStart(2,'0');

    const hour = String(date.getHours()).padStart(2,'0');
    const min = String(date.getMinutes()).padStart(2,'0');

    return `${year}-${month}-${day} ${hour}:${min}`;
  };

  return (
    <div>
        <div>
          <h1 className="my-3">Guestbook Modify Page</h1>
          <div className="form-group">
            <label htmlFor="bno">bno</label>
            <input type="text" className="form-control" id="bno" name="bno" placeholder="bno" value={dto.bno} readOnly/>
          </div>

          <div className="form-group">
            <label htmlFor="title">title</label>
            <input type="text" className="form-control" id="title" name="title" placeholder="Title" value={dto.title}
                   onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="content">content</label>
            <textarea className="form-control" id="content" name="content" value={dto.content} placeholder="Content"
                      onChange={handleChange}>{dto.content}</textarea>
          </div>

          <div className="form-group">
            <label htmlFor="writer">writer</label>
            <input type="text" className="form-control" id="writer" name="writer" placeholder="Writer"
                   value={dto.writerName}
                   readOnly/>
          </div>

          <div className="form-group">
            <label htmlFor="regDate">regDate</label>
            <input type="text" className="form-control" id="regDate" name="regDate" placeholder="regDate"
                   value={formatDate(dto.regDate)}
                   readOnly/>
          </div>

          <div className="form-group my-4">
            <label htmlFor="modDate">modDate</label>

            <input type="text" className="form-control" id="modDate" name="modDate" placeholder="modDate"
                   value={formatDate(dto.modDate)}
                   readOnly/>
          </div>
        </div>
      <button type="button" className="btn btn-primary"
              onClick={handleClick}
      >수정
      </button>
      <button type="button" className="btn btn-secondary"
      onClick={() => {
        setDto(initDto.current);
      }}
      >다시 쓰기</button>

    </div>
  );
}

export default Modify;