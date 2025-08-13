import React, {useState} from 'react';

function CheckButton() {
    const [isToggleOn, setIsToggleOn] = useState(false);

    function handleClick() {

        const check = window.confirm("확인하시겠습니까?");

        // setIsToggleOn((isToggleOn) => !isToggleOn);
        setIsToggleOn(check);
    }


    return (
        <button onClick={handleClick} disabled={isToggleOn}>
            {isToggleOn ? '확인됨' : '확인하기'}
        </button>
    );
}

export default CheckButton;