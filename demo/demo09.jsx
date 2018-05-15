import React from "react"
import ReactDOM from "react-dom"

const wendu = {
  s: "Sheshidu",
  h: "Huashidu"
}

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
function zhuanhuan (num, to){
  const number = parseInt(num);
  if(Number.isNaN(number)){
    return ""
  }
  const output = to(number);
  return (Math.round(output * 1000) / 1000).toString();
}

class InputWendu extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    const target = e.target;
    this.props.onChange(target.value, target.name);
  }
  render(){
    return (
      <div>
        <h3>请输入{this.props.type === "Sheshidu" ? "摄氏度" : "华氏度"}</h3>
        <input type="text" name={this.props.type} onChange={this.props.onChange} value={this.props.wen}/>
      </div>
    )
  }
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wendu: wendu.s,
      number: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    this.setState({
      wendu: target.name,
      number: target.value
    })
  }
  render(){
    const statu = this.state.wendu;
    const number = this.state.number;
    const sheshidu = statu === wendu.s ? number : zhuanhuan(number, hToS);
    const huashidu = statu === wendu.h ? number : zhuanhuan(number, sToH);
    return (
      <div>
        <InputWendu type={wendu.s} onChange={this.handleChange} wen={sheshidu}/>
        <InputWendu type={wendu.h} onChange={this.handleChange} wen={huashidu}/>
        <FeiTeng sheshidu={parseInt(sheshidu)}/>
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