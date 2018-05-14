import React from "react"
import ReactDOM from "react-dom"

const arr = [
    {text:"列表1", id: 0},
    {text:"列表2", id: 1},
    {text:"列表3", id: 2},
    {text:"列表4", id: 3},
];

function List(props){
    const lists = props.lists;
    const l = lists.map(item =>
        <li key={item.id}>{item.text}</li>
    )
    return (
        <ul>{l}</ul>
    )
}

export default function(){
    ReactDOM.render(
        <List lists={arr} />,
        document.getElementById("root")
    )
}