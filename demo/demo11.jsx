import React from "react"
import ReactDOM from "react-dom"

const data = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  }, {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  }, {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  }, {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  }, {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  }, {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7"
  }
];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }
  handleChange(e){
    this.props.changeKey(e.target.value)
  }
  handleSwitch(){
    this.props.switchStock()
  }
  render() {
    return (<div>
      <input type="text" placeholder="Search..." onChange={this.handleChange}/><br/>
      <label><input type="checkbox" checked={this.props.isShowStock} onChange={this.handleSwitch}/>Only show products in stock</label>
    </div>)
  }
}

class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<tr>
      <th colSpan="2">{this.props.category}</th>
    </tr>)
  }
}
class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<tr>
      <td>
        {this.props.name}
      </td>
      <td style={this.props.isStocked ? {} : {color: "#f00"}}>
        {this.props.price}
      </td>
    </tr>)
  }
}

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const row = [];
    const obj = {};
    const showStock = this.props.showStock;
    const keyword = this.props.keywords;
    data.forEach(function(item) {
      const category = item.category;
      if(item.name.indexOf(keyword) === -1 || (showStock && !item.stocked)){
        return;
      }
      if (!obj[category]) {
        row.push(<ProductCategoryRow category={category} key={category}/>)
        obj[category] = 1
      }
      row.push(<ProductRow price={item.price} isStocked={item.stocked} name={item.name} key={item.name}/>)
    })
    return (<table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {row}
      </tbody>
    </table>)
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: "",
      showStock: false
    }
    this.changeKey = this.changeKey.bind(this);
    this.switchStock = this.switchStock.bind(this);
  }
  changeKey(keyword){
    this.setState({
      keywords: keyword
    })
  }
  switchStock(){
    this.setState(prevState => ({
      showStock: !prevState.showStock
    }))
  }
  render() {
    return (<div>
      <SearchBar changeKey={this.changeKey} switchStock={this.switchStock} isShowStock={this.state.showStock}/>
      <ProductTable keywords={this.state.keywords} showStock={this.state.showStock}/>
    </div>)
  }
}
export default function() {
  ReactDOM.render(<FilterableProductTable/>, document.getElementById("root"))
}
