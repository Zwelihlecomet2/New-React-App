import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Form from "./Components/Form/Form";
import Notes from "./Components/Notes/Notes";
import Modal from "./Components/Modal/Modal";

const NOTES = [];

function App() {
  const [notes, setNotes] = useState(NOTES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

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

  const toggleModal = (event) =>{
    setIsModalOpen((prevState) =>{
      return !prevState;
    })
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} setIsModalOpen={setIsModalOpen} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />

    {
      isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedNote={selectedNote} toggleModal={toggleModal} setSelectedNote={setSelectedNote} />
      )
    }
    </>
  );
}

export default App;
