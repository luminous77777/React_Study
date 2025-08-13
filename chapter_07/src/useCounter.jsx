//커스텀 훅 만들기
// 접두사로 use를 붙이면 React는 hook으로 인식한다

import React, {useState} from 'react';

function useCounter(initialValue) {
    const [count, setCount] = React.useState(initialValue);

    const increaseCount = () => setCount((count) => count +1);
    const decreaseCount = () => setCount((count) => Math.max(count -1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;