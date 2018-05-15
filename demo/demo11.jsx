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
  }
  render() {
    return (<div>
      <input type="text" placeholder="Search..."/><br/>
      <label><input type="checkbox"/>Only show products in stock</label>
    </div>)
  }
}

class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<tr>
      <td colSpan="2">{this.props.category}</td>
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
      <td>
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
    data.forEach(function(item) {
      const category = item.category;
      if (!obj[category]) {
        row.push(<ProductCategoryRow category={category} key={category}/>)
        obj[category] = 1
      }
      row.push(<ProductRow price={item.price} name={item.name} key={item.name}/>)
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
  }
  render() {
    return (<div>
      <SearchBar/>
      <ProductTable/>
    </div>)
  }
}
export default function() {
  ReactDOM.render(<FilterableProductTable/>, document.getElementById("root"))
}
