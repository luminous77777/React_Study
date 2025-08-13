import React from "react";
import Book1 from "./Book1";

function Library(props){
    return (
        <div>
            <Book1 name="처음 만난 파이썬"  numOfPage={300}/>
            <Book1 name="처음 만난 AWS"  numOfPage={400}/>
            <Book1 name="처음 만난 리액트"  numOfPage={500}/>
        </div>
    )
}

export default Library;