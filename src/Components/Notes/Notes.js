import Note from "./Note";
import "./Notes.css"

let Notes = (props) =>{

    const { notes, deleteNote, setIsModalOpen, selectedNote, setSelectedNote } = props;

    return(
        <div className="notes">
            {
                notes.length === 0 ? <p>No Notes Yet</p> : notes.map((note, index) =>{
                    return <Note key={index} id={note.id} title={note.title} text={note.text} deleteNote={deleteNote} setIsModalOpen={setIsModalOpen} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
                })
            }
        </div>
    )
}

export default Notes;