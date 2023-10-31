import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import NoteContainer from './components/NoteContainer'
import Sidebar from './components/Sidebar'
function App() {

  const [notes,setNotes] =useState(JSON.parse(localStorage.getItem('note-app'))||[]);
  

  const addNote=(color)=>{
    
    const tempNote=[...notes];
    tempNote.push({
      id:Date.now()+""+Math.floor(Math.random()*78),
      text:"",
      time: Date.now(),
      color,
    })
    setNotes(tempNote);
  }

  const deleteNotes=(id)=>{
    const tempNote=[...notes];
    const ind=tempNote.findIndex(item=>item.id===id);
    if(ind<0) return;

    tempNote.splice(ind,1);
    setNotes(tempNote)
  }

  const updateText=(text,id)=>{
    const tempNote=[...notes];
    const ind=tempNote.findIndex(item=>item.id===id);
    if(ind<0) return;

    tempNote[ind].text=text;
    setNotes(tempNote)
  }
  useEffect(()=>{
    localStorage.setItem('note-app',JSON.stringify(notes));
  },[notes]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="note">
        <div className='app-sidebar'>
          <Sidebar addNote={addNote}></Sidebar>
        </div>
        <div className='app-cont'>
          <NoteContainer notes={notes} deleteNotes={deleteNotes} updateText={updateText}></NoteContainer>
        </div>
      </div>
      
    </div>
  )
}

export default App
