import React from "react"
import ReactDOM from "react-dom"

function Hello(props) {
    return (
        <div>
            <h1>Hello {props.user}</h1>
            {props.children}
        </div>
    )
}

class Greeting extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Hello user={this.props.user}>
                <p>父级组件内容</p>
            </Hello>
        )
    }
}
export default function(){
    ReactDOM.render(
        <Greeting user="linzhijie"/>,
        document.getElementById("root")
    )
}