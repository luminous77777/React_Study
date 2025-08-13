import React from 'react';

function Button(props) {
    return (
        <button className={`bg-${props.clolor}`}>
            <b>
                {props.children}
            </b>
        </button>
    )
}

export default Button;