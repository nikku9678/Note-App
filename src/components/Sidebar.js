import React, { useState } from 'react'
import Plus_logo from '../media/262038.png';
import '../styles/Sidebar.css'
function Sidebar(props) {
    const colors=["red","blue","green","yellow","orange"]
    const  [listopen,setListopen] =useState(false)
  return (
    <>
      <div className="sidebar">
      <img src={Plus_logo} alt="" onClick={()=>setListopen(!listopen)}/>
      <ul className={`sidebar_list ${listopen?"sidebar_list_active":""}`}>
          {
            colors.map((item,index)=>
            <li 
              key={index}
              className='sidebar_list_item'
              style={{backgroundColor:item}}
              onClick={()=>props.addNote(item)}
            />)
          }
          </ul>
      </div>
    </>
  )
}

export default Sidebar;
