import React from "react"
import ReactDOM from "react-dom"

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            age: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {
        alert(this.state.name + this.state.age);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="">姓名：</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="">年龄：</label>
                    <input type="tel" name="age" value={this.state.age} onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        )
    }
}

export default function(){
    ReactDOM.render(
        <Form />,
        document.getElementById("root")
    )
}