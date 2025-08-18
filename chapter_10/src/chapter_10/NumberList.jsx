import React from "react";

function NumberList(props) {
    //대치 
    const {numbers}  = props;

    //리스트를 표시할때는 반드시 키값이 있어야한다
    //키값은 중복될수 없다
    const listItems = numbers.map(number =>
        <li key={number}>{number}</li>);
    return (
        <ul>{listItems}</ul>
    );
}

export default NumberList;