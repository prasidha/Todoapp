import React from 'react'
import './DeleteCom.css'
import {Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'


function Deletecom (props){
  //esari agadhi kei lekhyo vane line no herna parirakhdaina console ma sidhai herna sajilo hunxa 

  console.log("Props in DeleteCOm",props);

  return (
    <>
{/* yaha div element root element ho sab lai wrap garya xa so <></> le garna pardaina  */}
    <div>
    <li>{props.text}</li>
   
    <div className="main_div">
    <Button onClick={()=>{
      props.onDelete(props.index)
    }}   variant="contained" color="secondary" ><DeleteIcon/></Button>

{/* yaha hamile onEdit fn ma chai props pathairako xau ani uta update fn le paudai paudaina ne argument */}
{/* so yo on edit ma text matra pathaye hunxa kinaki tyo fn le setInput garya xa text le */}
    <Button  onClick={()=>{props.onEdit(props.index,props.text)
    props.setId(props.index)
    }}    variant="contained" color="secondary" ><EditIcon/></Button>
    
 </div>
  </div>  
  </> 

  )

  }
export default Deletecom

