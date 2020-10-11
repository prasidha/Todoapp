import React,{useState} from 'react'
//import './DeleteCom.css'

function Example() {

const[email,setEmail]=useState('')
const[password,setPassword]=useState()
    const logedIn=()=>{
        alert("you are loged in")
    }
    return (

        <div className="main_div">
        

        <form>
        <h1>login page</h1>
        <input type='email' placeholder='enter email address' required/><br/>
        <input type='password' placeholder='enter your password' required/><br/>

        <button onClick={logedIn}>login</button>
        <br/>
        <a href="#">forgot password? </a>
        </form>
        
        </div>
    )
}

export default Example
