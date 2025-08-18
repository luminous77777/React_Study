import React, {useState} from "react";

function RequestForm(props) {
    const [value, setValue] = useState("");
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(name + '가 입력한 요청사항: ' + value);
        event.preventDefault();
    }
    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input value={name} onChange={handleChangeName}/>
            </label>
            <br />
            <label>
                요청사항 : <textarea onChange={handleChange} placeholder="요청사항을 입력해주세요"/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default RequestForm;