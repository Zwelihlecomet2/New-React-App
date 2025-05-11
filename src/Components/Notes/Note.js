import React, { useState } from "react";
import "./Note.css"

let Note = (props) =>{
    let { id, title, text } = props;

    const [inputTitle, setTitle] = useState(title);
    const [inputText, setText] = useState(text);

    const noteHandler = (event) =>{
        setTitle("Changed Title");
        setText("Changed Text");
    }

    return(
            <div className="note" onClick={noteHandler}>
            <span className="material-symbols-outlined check-circle">check_circle</span>
            <div className="title">{id}</div>
            <div className="title">{inputTitle}</div>
            <div className="text">{inputText}</div>
            <div className="note-footer">
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
                <div className="tooltip archive">
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