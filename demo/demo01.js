import React from "react"
import ReactDOM from "react-dom"

function formatName(user){
  return user.firstName + '' + user.lastName;
}

function getGeeting(user){
  if(user) {
    return <h1>Hello, {formatName(user)}! {new Date().toLocaleTimeString()}</h1>;
  }
  return <h1>Hello, World!</h1>;
}

const user = {
  firstName: "lin",
  lastName: "Zhijie",
  name: "dajiege"
};
const names = ["name1","name2","name3"];


// const element = (
//   <div>
//   {
//     names.map((name,index)=>{
//       return <div key="{index}">hello, {name}!</div>
//     })
//   }
//   </div>
// )

export default function trick(){
  const element = getGeeting(user);
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
};


