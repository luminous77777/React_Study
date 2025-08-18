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

    const topics = [
    {id:1, title:"html", content:"html is... "},
    {id:2, title:"css", content:"css is... "},
    {id:3, title:"javascript", content:"javascript is... "},
    ]


    return (
        // 최상단 element는 하나여야한다.
        <div>
            <Header title="React"/>
            <Nav topics={topics}/>
            <Article title="Welcome!!" content={"Hello World!"} />
        </div>
    );
}
// 다른 컴포넌트에서 사용할 수 있도록 하기위한 선언
export default Web;