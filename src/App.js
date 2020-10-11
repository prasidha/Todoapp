import React ,{useState ,  useEffect} from 'react'
import Todos from './Todos'
import './App.css'
import {Button ,FormControl,InputLabel,Input} from '@material-ui/core'
import db from './firebase';
import firebase from "firebase"


function App() {
    const [todos ,setTodos]= useState(["this is initial","hey"]);
    const [input,setInput]=useState('');
  // when the app loads ,we need to listen to the database and fetch new todos as they get added/removed
   
  useEffect(() => {
      
    db.collection('users').orderBy('timestamp','desc').onSnapshot(snapshot =>{
        setTodos(snapshot.docs.map(doc => ({id:doc.id, todo:doc.data().todo})))
    })
  }, [])

    const addTodos =(e) =>{
        e.preventDefault();// stops the refresh
        db.collection('users').add({
            todo: input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setTodos([...todos,input])
        setInput("");
    }
    
    return (
        <div className="App">
            <h1> Todo App </h1>
       

         <form className="form">
     <FormControl>
            <InputLabel >WRITE TODO LISTS</InputLabel>
            <Input value={input} onChange={ e=>setInput(e.target.value)} />
         
     </FormControl>
     
     <Button disabled={!input} variant ="contained" color="primary" type ="submit" onClick={addTodos} >
     Add Todo
  </Button>
         
      </form> 

         <ul>
         {todos.map((todo,i)=>
            <Todos 
            key={i}
            todo={todo}/>
         )}
            
         
         </ul>
            
        </div>
    )
}

export default App
