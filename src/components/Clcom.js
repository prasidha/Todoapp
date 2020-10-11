import React ,{useState} from 'react';
import Deletecom from './Deletecom';
import './Clcom.css'
import {Button} from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';

//import Example from './Example';

function Clcom() {


   const[lists,setLists]=useState([])
   const[input,setInput]=useState('')
   const[id ,setId]=useState()


   
  
   const addInput=()=>{
      setLists([...lists,input])
      setInput('')
   }



    const deleteItem=(index)=>{
     setLists(lists.filter((arr,i)=>{
              return i!==index;
           }))

     }

      const editItem=(index,text)=>{
      setInput(text)

      
       }


      const updatedList=()=>{

         // const items=lists
         lists[id]=input
         setLists(lists)   
       
         setInput('')   
          
   }
      
   return (
      <div className="todo_list">
         <div className="todolist_center">
      <h4 >Todo list</h4>

      <input  value={input} onChange={event=>setInput(event.target.value)}/><br/>
      <Button disabled={!input} onClick={addInput}  variant="contained" color="secondary" >+</Button>
      <Button  disabled={!input} index={'i'} onClick={()=>updatedList("index")}  variant="contained" color="secondary"  ><UpdateIcon /></Button>  
      <ul style={{listStyleType : "none" }}>

         {lists.map((list,i)=>
           <Deletecom 
           key={i}
           index={i}
            text={list}
           onDelete={deleteItem}
           onEdit={editItem}
           setId={setId}
           />
         )}
      </ul>
      </div>
      </div>
   )
 }
export default Clcom
