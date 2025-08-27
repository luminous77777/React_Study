import React, {createContext, useContext, useState} from 'react';
//1. Context를 생성
//2. Context.Provider 에서 사용하는 변수, 함수 구현
//3. 하위 컴포넌트에서 쉽게 사용할 수 있도록 커스텀 hook 구현


//1. Context 생성
const AuthContext = createContext();

//2. 로그인 했을때 token 저장, 로그아웃 token 삭제, token 저장변수
// function AuthProvider(props) {
//   const {childeren} = props;
// }
// const AuthProvider = (props) => {
//   const {childeren} = props;
// }
//
// const Authporvider = ({childern}) => {
//
// } //위 3개 같은 코드

export function AuthProvider(props) {
  const {children} = props;
  const [token,setToken] = useState(null);

  const login = (newToken) => {
    setToken(newToken)
    localStorage.setItem('token', newToken);
    //return 후 랜더링후 저장
  }

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider value={{token, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

//<AuthContext.Provider value={{token, login, logout}}>
//  <App />
//</AuthContext.Provider>
