import React,{useContext} from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return(
    //100vw, 100vh => 100등분한것의 100개, 즉 전체
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "1.5rem",
        backgroundColor: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
      }}
    >
      <p>안녕하세요, 테마변경가능 기능 테스트</p>
      <button onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}

export default MainContent;