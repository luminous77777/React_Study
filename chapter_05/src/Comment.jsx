import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import CommentText from "./CommentText";



function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">
                <Avatar author={props.author} />

                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>

            <CommentText text={props.text} date={props.date} />
        </div>
    );
}

export default Comment;