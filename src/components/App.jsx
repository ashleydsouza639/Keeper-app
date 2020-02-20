import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
//import notes from "../notes";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    ////props.onAdd(note)) in CreateArea.jsx  <CreateArea onAdd={addNote} />;
    //console.log(newNote);
    setNotes(prevNote => {
      return [...prevNote, newNote];
    });
  }




  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* add note component */}
      {notes.map((noteItem,index) => (
        <Note 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
     
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;