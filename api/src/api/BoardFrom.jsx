import React from "react";
import Board from "./Board";

function BoardFrom(props) {
  return (
    <div className="container">
    <from>
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" name="title" placeholder="Enter Title"/>
      </div>
      <div className="form-group">
        <label>Content</label>
        <textarea className="form-control" name="content" rows="5"/>
      </div>
      <div className="form-group">
        <label>WriterEmail</label>
        <input type="text" className="form-control" name="WriterEmail" placeholder="WriterEmail"/>
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </from>
    </div>
  );
}

export default BoardFrom;