import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

/*
JavaScript에서의 화살표함수
1.표준형 (파라미터) => {return ~~~;}
const sum = (num1, num2) =>{
    let sum = num1 + num2 ;
    return sum;
}
2.파라미터가 1개: 파라미터 => {return ~~~;} : ()생략가능
3.리턴문 1개만 존재한다 :  (파라미터) => ~~~~~; {}과 return 예약어 생략
const sum = (num1, num2) => num1 + num2;
 */

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;