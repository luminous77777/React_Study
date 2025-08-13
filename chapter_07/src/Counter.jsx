import React, {useState, useEffect} from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);
    const [minus, setMinus] = useState(0);
    // const mode = useState();
    // console.log(mode);

    useEffect(() =>{
       document.title = `총 ${count}번 클릭했습니다`;
       setMinus(count -1 );
    }, [count]);

    return (
      <div>
          <p>총 {count}번 클릭했습니다.</p>
          <button onClick={() => setCount(count + 1)}>
              클릭
          </button>
      </div>
    );
}

export default Counter;