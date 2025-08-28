import React, {useState, useEffect} from 'react';
import axios from 'axios';//서버에서 데이터만 가져올때 사용하는 객체
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Button from "bootstrap/js/src/button";


function List(props) {
  const [list, setList] = useState(null);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(1);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
  const [pageList, setPageList] = useState([]);
  const [size,setSize] = useState(10);
  const [start,setStart] = useState(1);
  const [totalPage,setTotalPage]  = useState(1);
  const [searchOption, setSearchOption] = useState('');
  const [searchString, setSearchString] = useState('');
  const location = useLocation();
  const [searchCount, setSearchCount] = useState(0);

  //List컴포넌트가 생성될때 한번만 호출하도록 구성
  useEffect(() => {
    //page=2&size=10&type=&keyword=
    axios.get(`boardrest/list?page=${page}&size=${size}&type=${searchOption}&keyword=${searchString}`)
    .then((res)=>{
      console.log(res);
      console.log(list);
      setList(res.data);

      setEnd(res.data.end);
      setNext(res.data.next);
      setPrev(res.data.prev);
      setSize(res.data.size);
      setStart(res.data.start);
      setTotalPage(res.data.totalPage);
      setPageList(res.data.pageList);
      console.log(pageList);

    })
    .catch((err)=>{
      console.log("error:",err);
    });
  }, [page, searchCount]);

  const handleClick = (e) => {
    const {name} = e.target;
    if (name == 'prev'){
      setPage(start -1);
    }else if(name == 'next'){
      setPage(end+1);
    }
    else{
      console.log("handle click :",name)
      setPage(name);
    }
  }
  const handleChangeSelect = (event) => {
    setSearchOption(event.target.value);
  }

  const handleChangeString = (event) => {
    setSearchString(event.target.value);
  }

  const handleClickSearch = (event) => {
    // setPage(1);
    navigate({
      pathname: location.pathname,
      search: `?page=${page}&size=${size}&type=${searchOption}&keyword=${searchString}`,
    });
    setSearchCount(searchCount+1);
  }



  return (
    <div>
      <div>
        <select value={searchOption} onChange={handleChangeSelect} >
          <option value=''>----------</option>
          <option value='t'>제목</option>
          <option value='c'>내용</option>
          <option value='w'>작성자</option>
          <option value='tc'>제목+내용</option>
          <option value='tcw'>제목+내용+작성자</option>
        </select>
        <input type='text' value={searchString} onChange={handleChangeString}  />
        <button type="button" onClick={handleClickSearch} >검색</button>
      </div>
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
          }} className="clickpoint" key={dto.bno}>
            <td>{dto.bno}</td>
            <td>{dto.title}</td>
            <td>{dto.writerName}</td>
          </tr>
        })}
        </tbody>
        <tfoot>
        <tr>
          <td colSpan="2">
            {prev && <button name="prev" onClick={handleClick}>prev</button>}
            {pageList.map(pageNo =>{
              return <button name={pageNo} onClick={handleClick}>{pageNo}</button>
            })}
            {next && <button name="next" value="next" onClick={handleClick}>next</button>}
          </td>
        </tr>
          <tr>
            <button type="button" className="btn btn-primary" onClick={(event) =>{
              event.preventDefault();
              navigate('/register')
            }}>글쓰기</button>
          </tr>
        </tfoot>
      </table>
    </div>
  );

}

export default List;