import React from "react";
import Welcome from "./Welcome";


//import를 사용하여 다른 파일로 분리되어있는 컴포넌트를 합성.
function App1(props) {
    return (
        <div>
            <Welcome name="Mike"/>
            <Welcome name="Steve"/>
            <Welcome name="Jane"/>
        </div>
    )
}

export default App1;