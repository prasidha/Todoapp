import React ,{useState} from 'react'
import {Button,Modal, List , ListItem ,ListItemText, Input} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import db from './firebase'
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase'



const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  ListItemStyles:{
     backgroundColor:'white',
    marginLeft:'-5%',
    borderRadius:'20px'
  },
}));

function Todos(props) {
  const classes = useStyles();
  const [open , setOpen]=useState(false);
  const[updateInput,setUpdateInput] =useState('');

  const handleOpen =() =>{
    setOpen(true)
  }


  const deleteBtn =()=>{
    db.collection('users').doc(props.todo.id).delete()
  }

  const updateTodo = () =>{
   db.collection('users').doc(props.todo.id).set({
      todo:updateInput,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()

   },{merge:true})
    setOpen(false)

  }
    return (
        <>
        <Modal
              open={open}
              onClose={e =>setOpen(false)}
             
            >
  <div className={classes.paper}>
  
   <Input value ={updateInput} placeholder={props.todo.todo} onChange={e =>setUpdateInput(e.target.value)}/>
   <Button variant="contained" color="secondary" onClick={e=>setOpen(false)}>close</Button>
   <Button variant="contained" color="secondary" onClick={updateTodo}>update</Button>
  </div>

</Modal>
        <List className={classes.listStyles}>
        <ListItem className={classes.ListItemStyles}>
          <ListItemText primary={props.todo.todo}/>
          <Button variant="contained" color="secondary" onClick={deleteBtn}><DeleteIcon/></Button>
        <Button variant="contained" color="primary" onClick={handleOpen}><EditIcon /></Button>
        </ListItem>
        
        </List>
        
        </>
    )
}

export default Todos
