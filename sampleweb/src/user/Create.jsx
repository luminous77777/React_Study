import React from "react";

function Create(props) {
  return (
    <div>
      <h2>Create</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const content = event.target.content.value;
        console.log(title, content);
        props.onCreate(title, content);
      }}>
        <p><input name="title" placeholder="title"/></p>
        <p><textarea name="content" placeholder="content"/></p>
        <p>
          <button>Create</button>
        </p>
      </form>
    </div>
  );
}

export default Create;