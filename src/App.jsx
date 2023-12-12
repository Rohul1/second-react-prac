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
borderRadius : "20px",
alignItem : "center",
padding : "20px"


}


function District (props){
const [power,setPower] = useState(1)

const bostPower = ()=>{
  const newPower = power * 2;
  setPower(newPower);
}

  return(
    <div style={districtStyle}>
      <h2>Name : {props.name}</h2>
    <p>Speciality : {props.special}</p>
    <h4>Power : {power}</h4>
    <button onClick={bostPower}>Bost The Power</button>
    </div>
  )
}


export default App
