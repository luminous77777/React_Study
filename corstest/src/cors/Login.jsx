import React from "react";
import axios from "axios";
import {useState}  from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./AuthContext"

function Login(props) {
  const [loginInfo, setLoginInfo] = useState({
    email:"",pw:""
  });

  const navigate = useNavigate();
  const {token, login, logout} = useAuth();

  const handleChange = (event) => {
    const {name, value} = event.target;
    setLoginInfo((prevInfo) => ({
      ...prevInfo, [name] : value
    }));
  }

  //Content-Type
  // - text/html
  // -text/plain : String(문자열)
  // -application/json
  // -application/xml
  // -application/x-www-form-urlencoded
  // - multipart/form-data

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/api/login`, loginInfo , {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then((res) => {
      console.log("받은 데이터:",  res.data);
      // sessionStorage.setItem("token", res.data); //세션에 토큰 저장
      login(res.data);
      navigate('/list');
    })
    .catch((error)=> {console.log("error : ",error)});
  }

  //한줄일때 중괄호가 없으면 return이된다 , 화살표 문법,람다식
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          email:
          <input type="text" value={loginInfo.email} name="email"
          onChange={handleChange}
          />
        </p>
        <p>
          pw:
          <input type="password" value={loginInfo.pw} name="pw"
                 onChange={handleChange}
                 />
        </p>
        <p>
          <button type="submit">로그인</button>
        </p>
      </form>
    </div>
  );
}
export default Login;