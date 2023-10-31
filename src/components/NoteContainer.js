import '../styles/NoteContainer.css'
import Notes from '../components/Notes';

function NoteContainer(props) {
  
 
  const reverseArray=(arr)=>{
    const array=[]
    for(let i=arr.length-1; i>=0; i--){
      array.push(arr[i]);
    }
    return array;
  }

  const notes=reverseArray(props.notes)
  return (
    <>
      <>
      <div className="note_main ">
        <div className="note_box">
          {notes.length>0 ? notes.map((item)=><Notes key={item.id} note={item} deleteNotes={props.deleteNotes} updateText={props.updateText}></Notes>):<h2>No Notes present</h2>}
        </div>
        </div>
      </>
    </>
  )
}

export default NoteContainer;
