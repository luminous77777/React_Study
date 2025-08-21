import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from 'axios';
//useLocation은 주소창의 값을 가져올때 사용하는 훅
import dayjs from "dayjs";

function Read(props) {
  const [dto, setDto] = useState({
    bno: '', title: '', content: '', writerName: '', regDate:'', modDate:''
  });
  const location = useLocation();
  const navigate = useNavigate();

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
    })
    .catch((error)=>{
      console.log(error);
    });
  },[]);

  const handleClickDelete = () =>{
    const confirmed = window.confirm("삭제하시겠습니까?");

    if (!confirmed) return;

    axios.post(`boardrest/remove`, dto.bno, {
      headers:{
        'content-type': 'application/json' //500 나오니까 해결해야함
      }
    })
    .then((res) => {
      alert( res.data +"번글이 삭제되었습니다");
      navigate("/");
    })
    .catch((error)=>{
      console.log(error);
    })
  };


  return (
    <div>
        <div>
          <h1 className="my-3">Guestbook Read Page</h1>
          <div className="form-group">
            <label htmlFor="bno">bno</label>
            <input type="text" className="form-control" id="bno" name="bno" placeholder="bno" value={dto.bno} readOnly/>
          </div>

          <div className="form-group">
            <label htmlFor="title">title</label>
            <input type="text" className="form-control" id="title" name="title" placeholder="Title" value={dto.title}
                   readOnly/>
          </div>

          <div className="form-group">
            <label htmlFor="content">content</label>
            <textarea className="form-control" id="content" name="content" placeholder="Content" value={dto.content} readOnly>{dto.content}</textarea>
          </div>

          <div className="form-group">
            <label htmlFor="writer">writer</label>
            <input type="text" className="form-control" id="writer" name="writer" placeholder="Writer" value={dto.writerName}
                   readOnly/>
          </div>

          <div className="form-group">
            <label htmlFor="regDate">regDate</label>
            <input type="text" className="form-control" id="regDate" name="regDate" placeholder="regDate" value={dayjs(dto.regDate).format('YYYY-MM-DD HH:mm')} readonly />
          </div>

          <div className="form-group my-4">
            <label htmlFor="modDate">modDate</label>

            <input type="text" className="form-control" id="modDate" name="modDate" placeholder="modDate" value={formatDate(dto.modDate)}
                   readOnly/>
          </div>
        </div>
      <button type="button" className="btn btn-primary"
      onClick={(event) =>{
        // event.preventDefault();
        navigate(`/modify?bno=${dto.bno}`);
      }}
      >수정</button>
      <button className="btn btn-secondary" onClick={()=>{
        navigate(`/`);
      }}>리스트</button>
      <button className="btn btn-danger" onClick={handleClickDelete}
      >삭제</button>
    </div>
  );
}

export default Read;