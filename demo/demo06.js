import React from "react"
import ReactDOM from "react-dom"

function Toggle(props){
    return props.isShow ?(
        <h1>SHOWN!</h1>
    ) : (
        null
    )
}

class Word extends React.Component {
    constructor(props){
        super(props);
        this.state = {isShow: true};
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.setState(prevState => ({
            isShow: !prevState.isShow
        }))
    }
    render(){
        return (
            <div>
                <Toggle isShow={this.state.isShow} />
                <button onClick={this.handleClick}>
                    {this.state.isShow ? "隐藏" : "显示"}
                </button>
            </div>
        )
    }
}
export default function(){
    ReactDOM.render(
        <Word />,
        document.getElementById("root")
    )
}