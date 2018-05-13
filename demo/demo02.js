import React from "react"
import ReactDOM from "react-dom"

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function formatDate(date) {
  return date.toLocaleTimeString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}



const lcomment = {
  author: {
    avatarUrl: "https://s1.ax1x.com/2018/05/13/CDMgeS.jpg",
    name: "linzhijie",
  },
  text: "comment content.",
  date: new Date()
}



function App(){
  return (
    <div>
      <Welcome name="name1" />
      <Welcome name="name2" />
      <Welcome name="name3" />
      <Welcome name="name4" />
      <Comment 
        author={lcomment.author}
        text={lcomment.text}
        date={lcomment.date} />
    </div>
  )  
}
//const element = <App />;

export default function(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}