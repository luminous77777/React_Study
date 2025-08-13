import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이름1",
    comment:"댓글 내용1",
  },
  {
    name: "이름2",
    comment:"댓글 내용2"
  },
  {
    name: "이름3",
    comment:"댓글 내용3"
  }
]

function CommentList(props) {
    return (
        <div>
            {comments.map(comment =>
                <Comment name={comment.name} comment={comment.comment} />)}
        </div>
    );
}

export default CommentList;