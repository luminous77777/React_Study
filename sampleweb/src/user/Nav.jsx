import React from "react";

function Nav(props) {

    const topics = props.topics;
    //map()으로 탐색하는 방법
    // const listItems= topics.map((topic) =>
    // <li key={topic.id}><a href="/">{topic.title}</a></li>
    // )

    //2.for() 사용
    const lis =[];
    for (let i=0; i < topics.length; i++) {
        let topic = topics[i];
        lis.push(<li key={topic.id}><a id={topic.id} href="/" onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
            //나누기 /1 과같은 형식으로도 숫자형으로 파싱가능
        }}>{topic.title}</a></li>);
    }



    return (
        <div>
            <ol>
                {lis}
            </ol>
        </div>
    );
}

export default Nav;