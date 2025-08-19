import React, {useState} from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Create from "./Create";
import Update from "./Update";

//함수형 컴포넌트
//컴포넌트의 이름의 첫글자는 대문자로 쓴다
function Web(props) {

  const [mode, setMode] = useState('Welcome');
  //글을 읽거나 수정할때 사용하는 값
  const [id, setId] = useState(0);
  //글을 등록할 때 사용할 id 값
  const [nextId, setNextId] = useState(4);

  const [topics, setTopics] = useState([
    {id: 1, title: "html", content: "html is... "},
    {id: 2, title: "css", content: "css is... "},
    {id: 3, title: "javascript", content: "javascript is... "},
  ]);

  let content = null; // Article 컴포넌트 내용저장 변수

  if (mode === 'Welcome') {
    content = <Article title="Welcome!!" content={"Hello World!"}/>;
  } else if (mode === 'Read') {
    //클릭한 내용 출력
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        // content = <Article title ={topics[i].title} content={topics[i].content}/>
        content = <Article {...topics[i]}/>
      }
    }
  } else if (mode === 'Create') {
    content = <Create onCreate={(_title, _content) => {
      const newTopic = {id: nextId, title: _title, content: _content,}
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics((newTopics));
      setNextId(nextId + 1);
      console.log(topics);
      setId(newTopic.id);
      setMode('Read');
    }}/>;
  } else if (mode === 'Update') {
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        content = <Update onUpdate={(_title, _content) => {
          const updateTopic = {id: id, title: _title, content: _content};
          const updateTopics = [...topics];
          for (let i =0; i<updateTopics.length; i++) {
            if (updateTopics[i].id === id) {
              updateTopics[i] = updateTopic;
              break;
            }
          }
          setTopics(updateTopics);
          setMode('Read');
        }}/>;
      }
    }
  }

  //Header
  //Nav
  //Article

  return (
    // 최상단 element는 하나여야한다.
    <div>
      <Header title="React" onChangeMode={() => {
        setMode('Welcome');
      }}/>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('Read');
        setId(_id);
      }}/>
      <ul>
        {content}
        <li><a href="/" onClick={(event) => {
          event.preventDefault();
          setMode('Create');
        }}>Create</a></li>
        {mode==='Read' && <li> <a href="/" onClick={(event) => {
          event.preventDefault();
          setMode('Update');
        }}>Update</a> </li>}
        {mode === 'Read' && <li> <a href="/" onClick={(event) => {
          event.preventDefault();
          const newTopics = [];
          for(let i =0; i<topics.length; i++) {
            if(topics[i].id !== id) {
              newTopics.push(topics[i]);
            }
          }
          setTopics(newTopics);
          setMode('Welcome');
        }}>Delete</a></li>}
      </ul>
    </div>
  );
}

// 다른 컴포넌트에서 사용할 수 있도록 하기위한 선언
export default Web;