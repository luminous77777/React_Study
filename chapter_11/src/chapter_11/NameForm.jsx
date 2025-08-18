import React, {useState} from "react";

//폼 : 사용자의 입력을 받는 태그
//리액트 폼태그를 사용하는 컴포넌트 == > "제어컴포넌트"라고 부른다
//제어 컴포넌트는 반드시 useState가 있다

function NameForm(props) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 이름 : ' + value);
        event.preventDefault();
    }

    const handleClick = (event) => {
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
              <label>
                  이름: <input type="text" value={value} onChange={handleChange} />
              </label>
            <button type="submit">제출</button>
            <button type={"reset"} onClick={handleClick}>다시쓰기</button>
        </form>
    )
}

export default NameForm;