import React, { useState } from "react";
import "./Note.css"

let Note = (props) =>{
    let { id, title, text, deleteNote, setIsModalOpen, setSelectedNote } = props;

    const [inputTitle] = useState(title);
    const [inputText] = useState(text);

    const [hover, setHover] = useState(false);

    const handleNoteClick = (event) =>{
        setIsModalOpen(true);
        setSelectedNote({
            id: id,
            title,
            text
        });
    }

    const handleDeleteNote = (event) =>{
        deleteNote(id);
    }

    const handleMouseOver = (event) =>{
        setHover(true);
    }

    const handleMouseOut = (event) =>{
        setHover(false);
    }

    return(
        <div className="note" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="inner-note" onClick={handleNoteClick}>
                    {
                        hover && (
                            <span className="material-symbols-outlined check-circle">check_circle</span>
                        )
                    }
                <div className="title">{inputTitle}</div>
                <div className="text">{inputText}</div>
            </div>
            <div className="note-footer" style={{visibility: hover ? "visible" : "hidden"}}>
                <div className="tooltip">
                    <span className="material-symbols-outlined hover small-icons">add_alert</span>
                    <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                    <span className="material-symbols-outlined hover small-icons">person_add</span>
                    <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                    <span className="material-symbols-outlined hover small-icons">palette</span>
                    <span className="tooltip-text">Change color</span>
                </div>
                <div className="tooltip">
                    <span className=  "material-symbols-outlined hover small-icons">image</span>
                    <span className="tooltip-text">Image</span>
                </div>
                <div className="tooltip archive" onClick={handleDeleteNote}>
                    <span className="material-symbols-outlined hover small-icons">archive</span>
                    <span className="tooltip-text">Archive</span>
                 </div>
                <div className="tooltip">
                    <span className="material-symbols-outlined hover small-icons">more_vert</span>
                    <span className="tooltip-text">More</span>
                </div>
            </div>
        </div>
    )
}

export default Note;