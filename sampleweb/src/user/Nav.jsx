import React from "react";

function Nav(props) {

    const topics = props.topics;
    //map()으로 탐색하는 방법
    const listItems= topics.map((topic) =>
    <li key={topic.id}><a href="/">{topic.title}</a></li>
    )
    //2.for() 사용
    const lis =[];
    for (let i=0; i < topics.length; i++) {
        let topic = topics[i];
        lis.push(<li key={topic.id}><a href="/">{topic.title}</a></li>);
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