import React , { Component } from 'react'
import ReactDOM from 'react-dom'


function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const ListItems = numbers.map((number) =>
    <ListItem key={number.toString()}
    value={number} />
    );
    return(
        <ul>
         {ListItems}
        </ul>
    );
}

    const number = [1,2,3,4,5];
    ReactDOM.render(
        <NumberList number={numbers} />,
        document.getElementById('root')
    );

