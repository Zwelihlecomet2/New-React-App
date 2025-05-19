import "./Modal.css"

let Modal = (props) =>{
    const { isModalOpen, setIsModalOpen, selectedNote, setSelectedNote, toggleModal } = props;

    const modalSubmit = (event) =>{
        event.preventDefault();
        setIsModalOpen(false);
        console.log(selectedNote);
    }

    const closeModalOutside = (event) =>{
        const isOutsideModalClickedOn = Boolean(event.target.children[0]);
        isOutsideModalClickedOn ? toggleModal() : console.log("");
    }

    const handleEdit = (event) =>{
        const { name, value } = event.target;

        setSelectedNote((prevData) => ({
            ...prevData,
            [name]: value,
          }));
    }

    return(
        <div className={`modal ${isModalOpen ? "open-modal" : ""}`} onClick={closeModalOutside}>
            <div className="modal-content">
                <div className="form-container">
                    <form className="form" id="modal-form">
                        <input name="title" type="text" id="modal-Title" className="note-title" placeholder="title" value={selectedNote.title} onChange={handleEdit}/>
                        <input name="text" type="text" id="modal-Text" placeholder="Take a note... " className="note-text" value={selectedNote.text} onChange={handleEdit}/>
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
                            <button id="modal-close-btn" className="close-btn" onClick={modalSubmit}>Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;