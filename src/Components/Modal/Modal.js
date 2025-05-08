import "./Modal.css"

let Modal = () =>{
    return(
            <div className="modal">
            <div className="modal-content">
                <div className="form-container">
                    <form className="form" id="modal-form">
                        <input type="text" id="modal-Title" className="note-title" placeholder="title" />
                        <input type="text" id="modal-Text" placeholder="Take a note... " className="note-text" />
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
                            <button id="modal-close-btn" className="close-btn">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;