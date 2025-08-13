import React from "react";

function WarningBanner(props) {
    if (!props.warning) {
        return null;
    }
    return (
        //{{}}, 자바 스크립트 코드이며, json의 형식이라는것을 명시
        <div style={{color:'red'}}>경고!!!</div>
    );
}

export default WarningBanner;