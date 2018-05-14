import React from "react"
import ReactDOM from "react-dom"

function FeiTeng(props){
  return (
    props.sheshidu >= 100 ? (
      <p>水沸腾了</p>
    ) : (
      <p>水没有沸腾</p>
    )
  )
}

function sToH (num){
  return num * 1.8 +32
}
function hToS (num){
  return (num - 32) / 1.8
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheshidu: "",
      huashidu: ""
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.handleChangeh = this.handleChangeh.bind(this);
  }
  handleChanges(e) {
    const target = e.target;
    const value = parseInt(target.value);
    const hvalue = sToH(value);
    this.setState({
      sheshidu: value ? value : "",
      huashidu: hvalue
    })
  }
  handleChangeh(e) {
    const target = e.target;
    const value = parseInt(target.value);
    const svalue = hToS(value);
    this.setState({
      huashidu: value ? value : "",
      sheshidu: svalue
    })
  }
  render(){
    return (
      <div>
        <input type="tel" value={this.state.sheshidu} onChange={this.handleChanges}/>
        <input type="tel" value={this.state.huashidu} onChange={this.handleChangeh}/>
        <FeiTeng sheshidu={this.state.sheshidu}/>
      </div>

    )
  }
}
export default function(){
  ReactDOM.render(
    <Calculator />,
    document.getElementById("root")
  )
}