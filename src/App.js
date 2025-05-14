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
      return [...notes, note];
    })
    console.log(notes);
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote}/>
      <Notes notes={notes}/>
      <Modal />
    </>
  );
}

export default App;
