import React from 'react'
import '../styles/Notes.css'
import Delete_icon from '../media/delete.png'
function Notes(props) {

  let timer=500, timeout;
  const formatDate=(value)=>{
    const date= new Date(value);
    const monthNames=['jan','feb','March','April','May','June','July','August','Sep','Oct','Nov','Dec'];
    let hrs= date.getHours();
    let ampm=hrs>12?"PM":"AM";
    hrs=hrs>12?(hrs=Math.abs(12-hrs)):hrs;

    let min=date.getMinutes();
    min=min<10?"0"+min:min;

    let day=date.getDate();
    const month=monthNames[date.getMonth()];

    return `
    ${hrs}:${min} ${ampm} ${day} ${month}`;

  }
  
  const debounce=(func)=>{
    clearTimeout(timeout);
    timeout=setTimeout(func,timer);
  }
  const updateText=(text,id)=>{
    debounce(()=>props.updateText(text,id));
  }
  return (
    <>
      <div className="notes">
      
        <div className="text-box" style={{backgroundColor:props.note.color}}>
            <textarea type="text"
             style={{backgroundColor:props.note.color}} rows="7" 
             cols="20" 
             defaultValue={props.note.text}
            onChange={(event)=>updateText(event.target.value,props.note.id)}/>
            
        </div> 
        <div className='bootom'  style={{backgroundColor:props.note.color}}>
            <p>{formatDate(props.note.time)}</p>
            <img src={Delete_icon} alt="" onClick={()=>props.deleteNotes(props.note.id)} />
            </div>
        
      </div>
    </>
  )
}

export default Notes;
