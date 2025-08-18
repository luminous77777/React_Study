import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
//함수형 컴포넌트
//컴포넌트의 이름의 첫글자는 대문자로 쓴다
function Web(props) {
    //Header
    //Nav
    //Article
    return (
        // 최상단 element는 하나여야한다.
        <div>
            <Header />
            <Nav />
            <Article />
        </div>
    );
}
// 다른 컴포넌트에서 사용할 수 있도록 하기위한 선언
export default Web;