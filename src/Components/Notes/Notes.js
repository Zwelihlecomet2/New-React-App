import Note from "./Note";
import "./Notes.css"

let Notes = (props) =>{

    const { notes } = props;
    const title1 = notes[0].title;
    const text1 = notes[0].text;

    const title2 = notes[1].title;
    const text2 = notes[1].text;

    const title3 = notes[2].title;
    const text3 = notes[2].text;
    return(
        <div className="notes">
            <Note id={notes[0].id} title={title1} text={text1}/>
            <Note id={notes[1].id} title={title2} text={text2}/>
            <Note id={notes[2].id} title={title3} text={text3}/>
        </div>
    )
}

export default Notes;