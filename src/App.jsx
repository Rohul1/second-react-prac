import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
     <District name="Rajshashi" special="District"></District>
     <District name="Rajshashi" special="District"></District>
     <District name="Rajshashi" special="District"></District>
    </>
  )
}
const districtStyle = {
backgroundColor : "lightblue",
margin :"20px",


}


function District (props){
  return(
    <div style={districtStyle}>
      <h2>Name : {props.name}</h2>
    <p>Speciality : {props.special}</p>
    </div>
  )
}


export default App
