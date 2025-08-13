import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Application from './App';
import reportWebVitals from './reportWebVitals';

// class Hello extends React.Component {
//     render(){
//         return <div>Hello {this.props.toWhat} {this.props.name}</div>
//     }
// }

// const name = '소플';
//jsx의 방식
// const element = <h1> 안녕, {name}</h1>
//2. cerate element 방식
// const element = React.createElement('h1', null, `안녕, ${name}` );

//함수형
function formatName(user){
    return user.firstName + ' '+ user.lastName;
}

const user = {
    firstName: 'Kim',
    lastName: 'YunSeok'
}

function getGreeting(user){
    if(user){
        return <h1>Hello, {formatName(user)}</h1>
    }
    return <h1>Hello, Stranger.</h1>
}

const element=(
    // <h1>Hello, {formatName(user)}</h1>

    <div>{getGreeting(user)}</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   //   <Application {"World"} />
//   // </React.StrictMode>
// );

root.render(element);


//1. jsx
// root.render(<Hello toWhat={"World"} />);

//2 리액트 라이브러리식 (호출할 클래스, 함수 이름 ; 변수 ; 자식 컴퍼넌트)
// root.render(React.createElement(Hello, {toWhat:'world', name:'kim'}, null));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
