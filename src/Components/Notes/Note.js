import React, { useState } from "react";
import "./Note.css"

let Note = (props) =>{
    let { id, title, text, deleteNote } = props;

    const [inputTitle, setTitle] = useState(title);
    const [inputText, setText] = useState(text);

    const [hover, setHover] = useState(false);

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
                {
                    hover && (
                        <span className="material-symbols-outlined check-circle">check_circle</span>
                    )
                }
            <div className="title">{id}</div>
            <div className="title">{inputTitle}</div>
            <div className="text">{inputText}</div>
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