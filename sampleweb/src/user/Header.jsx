import React from "react";

function Header(props) {
    return (
        <div>
            <h1><a href="/">{props.title}</a></h1>
        </div>
    );
}

export default Header;