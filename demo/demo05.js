import React from "react"
import ReactDOM from "react-dom"

function UserGreeting(props) {
    return (
        <div>
            <h1>Hello, Lin Zhijie!</h1>
            <button onClick={props.onClick}>注销</button>
        </div>

    )
}
function GuestGreeting(props) {
    return (
        <div>
            <h1>Please Sign in</h1>
            <button onClick={props.onClick}>登录</button>
        </div>
    )
}

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handleUserClick = this.handleUserClick.bind(this);
        this.handleGuestClick = this.handleGuestClick.bind(this);
    }
    handleUserClick() {
        this.setState({
            isLoggedIn: false
        })
    }
    handleGuestClick() {
        this.setState({
            isLoggedIn: true
        })
    }
    render() {
        return this.state.isLoggedIn ? (
            <UserGreeting onClick={this.handleUserClick}/>
        ):(
            <GuestGreeting onClick={this.handleGuestClick}/>
        )
    }
}

export default function(){
    ReactDOM.render(
        <Greeting />,
        document.getElementById("root")
    )
}