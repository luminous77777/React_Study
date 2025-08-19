import React from 'react';

const ThemeContext = React.createContext();

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;

/*
하위 컴포넌트는 전부 사용가능한 부분이다
1. react context를 생성
const ThemeContext = React.createContext()
2. 리액트 context 사용할 수 있는 곳 지정
<ThemeContext.Provider value={}>
value속성에 하위 컴포넌트가 사용할 수 있는 변수명을 넣는다.
3. 사용할 곳에 useContext를 가저온다
const {} = useContext(ThemeContext);
*/
