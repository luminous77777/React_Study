import React from "react";

function Avatar(props) {
    return (
        <img className="avatar"
             src={props.author.avatarUrl}
             alt={props.author.name} />
    );
}

export default Avatar;