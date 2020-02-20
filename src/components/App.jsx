import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
//import notes from "../notes";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    ////props.onAdd(note)) defined in submitNote(note) in CreateArea.jsx  <CreateArea onAdd={addNote} />;
    //console.log(newNote);
    setNotes(prevNote => {
      return [...prevNote, newNote];
    });
  }

  function deleteNote(id) {
    //props.onDelete(props.id) defined in handleClick() in Notes.jsx;
    //console.log("delete triggered");
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
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
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;