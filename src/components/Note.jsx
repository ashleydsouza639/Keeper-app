import React from "react";

function Note(props) {     //pass props in child component so you can use .attribute in parent App component
  
  function handleClick() {
    props.onDelete(props.id);
  }
  
  return (
    <div className="note">
      <h1>{props.title}</h1>               {/*   <Note title=""></Note> in App.jsx*/}
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;

