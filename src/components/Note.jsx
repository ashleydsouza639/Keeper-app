import React from "react";

function Note(props) {     //pass props in child component so you can use .attribute in parent App component
  return (
    <div className="note">
      <h1>{props.title}</h1>               {/*   <Note title=""></Note> in App.jsx*/}
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
