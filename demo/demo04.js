import React from "react"
import ReactDOM from "react-dom"

class ToggleBtn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState( prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
    )
  }
}

const element = <ToggleBtn />

export default function(){
  ReactDOM.render(
    element,
    document.getElementById("root")
  )
}