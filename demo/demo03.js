import React from "react"
import ReactDOM from "react-dom"

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <h2>现在是：{props.date.toLocaleTimeString()}。</h2>
//     </div>
//   )
// }

// function trick(){
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById("root")
//   );
// }

function FormatTime(props) {
  return (
    <h2 onClick={props.onClick}>现在是：{props.date.toLocaleTimeString()}。</h2>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};  
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.timeID = setInterval(
      () => this.trick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  trick() {
    this.setState({
      date : new Date()
    });
  }

  handleClick(e) {
    alert(e.target.innerText);
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <FormatTime onClick={this.handleClick} date={this.state.date} />
      </div>
    );
  }
}

function App(){
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  )
}

export default function(){
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  )
};