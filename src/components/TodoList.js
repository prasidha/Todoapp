import React ,{useState} from 'react'
import {Input, Button} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import DeleteIcon from '@material-ui/icons/Delete'
import './TodoList.css'

// import DeleteList from './Deletecom'

function TodoList() {

    const[input,setInput]=useState()
    const[items,setItems]=useState([])

    const addList=()=>{
        setItems([...items,input])
        setInput('')
        
    }

    const DeleteList=(index)=>{
        setItems(items.filter((arr,i)=>{
             return i!==index;
          }))
     }

    return (
            <div className="todo_list">
                    <h1>Todo List App</h1>
                 <form className="form">
                   <Input placeholder="Add todo list" onChange={e=>setInput(e.target.value)}/>
                   <Button onClick={addList}> <AddCircleIcon style={{ color : "green" }}/></Button>

                   <ul style={{listStyleType : "none" }}>
                         {items.map((item,i)=>
                    
                              <li >
                                       
                                    {item}

                                    <Button onClick={DeleteList}> <DeleteIcon /></Button>

                                </li>
                       
                       )}
                   </ul>


                </form>
                   

            </div>





    )
        
                
            }
export default TodoList;
