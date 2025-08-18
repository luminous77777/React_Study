import React, {useState} from "react";

function FruitSelect(props) {
    const [value, setValue] = React.useState('grape');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('선택한 과일: ' +  event.target.elements[0].selectedOptions[0].text);
        //value = event.target.value
        //내용을 출력하고 싶다 => text
        // event.target.elements[0].selectedOptions[0].text;
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                <select value={value} onChange={handleChange}>
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="grpae">포도</option>
                <option value="watermelon">수박</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default FruitSelect;