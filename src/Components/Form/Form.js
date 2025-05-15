import React, {  useState } from "react";
import "./Form.css"

let Form = (props) =>{
    const { addNote } = props;

    const [inActive, setInactive] = useState(true);
    const [active, setActive] = useState(false);
    
    const [userInput, setUserInput] = useState({
        title: "",
        text: "" 
    });

    const noteTitleChangeHanler = (event) =>{
        setUserInput({
            ...userInput,
            title: event.target.value
        });
    };

    const noteTextChangeHanler = (event) =>{
        setUserInput({
            ...userInput,
            text: event.target.value
        });
    }

    const submitFormHandler = (event) =>{
        event.preventDefault();
        const note = {
            id: "",
            title: userInput.title,
            text: userInput.text
        }
        
        if(!(!note.title) && !(!note.text)){
            addNote(note);
        }

        setUserInput({
            id: "",
            title: "",
            text: ""
        });

        setInactive(true);
        setActive(false);
    }

    const inActiveFormClickedOn = (event) =>{
        setInactive(false);
        setActive(true);
    }

    return(
        <>
            {
                active && (
                <div className="form-container active-form">
                    <form onSubmit={submitFormHandler} className="form" id="form">
                        <input type="text" value={userInput.title} placeholder="title" id="note-title" className="note-title" onChange={noteTitleChangeHanler}/>
                        <input type="text" value={userInput.text} placeholder="Take a note... " id="note-text" className="note-text" onChange={noteTextChangeHanler}/>
                        <div className="form-actions">
                            <div className="icons">
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
                                    <span className="material-symbols-outlined hover small-icons">image</span>
                                    <span className="tooltip-text">Image</span>
                                </div>
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icons">archive</span>
                                    <span className="tooltip-text">Archive</span>
                                </div>
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icons">more_vert</span>
                                    <span className="tooltip-text">More</span>
                                </div>
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icons">undo</span>
                                    <span className="tooltip-text">Undo</span>
                                </div>
                                <div className="tooltip">
                                    <span className="material-symbols-outlined hover small-icons">redo</span>
                                    <span className="tooltip-text">Redo</span>
                                </div>
                            </div>
                            <button className="close-btn">Close</button>
                        </div>
                    </form>
                </div>
                )
            }

            {
                inActive && (
                <div className="form-container inactive-form" onClick={inActiveFormClickedOn}>
                    <form action="">
                        <input type="text" placeholder="Take a note... " className="note-text" />
                        <div className="form-actions">
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover">check_box</span>
                                <span className="tooltip-text">New list</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover">brush</span>
                                <span className="tooltip-text">New note with drawing</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover">image</span>
                                <span className="tooltip-text">New note with image</span>
                            </div>
                        </div>
                    </form>
                </div> 
                )
            }
    </>
    )
}

export default Form;