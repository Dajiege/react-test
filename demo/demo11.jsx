import React from "react"
import ReactDOM from "react-dom"

class SearchBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <input type="text" placeholder="Search..."/><br />
                <label><input type="checkbox"/>Only show products in stock</label>
            </div>
        )
    }
}

class ProductTable extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>

            </div>
        )
    }
}

class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <SearchBar />
                <ProductTable />
            </div>
        )
    }
}
export default function(){
    ReactDOM.render(
        <FilterableProductTable />,
        document.getElementById("root")
    )
}