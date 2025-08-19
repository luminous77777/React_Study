  import React, {useState} from "react";

  function Update(props) {
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    return (
      <div>
        <h2>Update</h2>
        <h4>id : {props.id}</h4>
        <form onSubmit={(event) => {
          event.preventDefault();
          const _title = event.target.title.value;
          const _content = event.target.content.value;
          console.log(_title, _content);
          props.onUpdate(_title, _content);
        }}>
          <p><input value={title} name="title" placeholder="title" onChange={(event) =>{
            setTitle(event.target.value);
          }}/></p>
          <p><textarea value={content} name="content" placeholder="content" onChange={(event) => {
            setContent(event.target.value);
          }}/></p>
          <p><button>Update</button></p>
        </form>
      </div>
    );
  }

  export default Update;