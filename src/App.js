import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Form from "./Components/Form/Form";
import Notes from "./Components/Notes/Notes";
import Modal from "./Components/Modal/Modal";

const NOTES = [];

function App() {
  const [notes, setNotes] = useState(NOTES);

  const addNote = (note) =>{
    setNotes((prevNotes) =>{
      return [...prevNotes, note];
    })
    // console.log(notes);
  }

  const deleteNote = (id) =>{
    setNotes((prevNotes) =>{
      return prevNotes.filter((note) =>{
        return note.id !== id;
      });
    });

    // console.log(notes.filter((note) =>{
    //   return note.id !== id;
    // }));
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote}/>
      <Notes notes={notes} deleteNote={deleteNote}/>
      <Modal />
    </>
  );
}

export default App;
