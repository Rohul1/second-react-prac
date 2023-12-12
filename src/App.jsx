import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
    <LoadPost></LoadPost>
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


function LoadPost (){
  const [posts, setPosts]= useState([])
  useEffect (()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res =>res.json())
    .then(data=> setPosts(data))
  },[])
  return(
    <div>
      <h2>Posts :{posts.length} </h2>
{
  posts.map(post => <Post title={post.title} body={post.body}></Post>)
}

    </div>
  )
}

function Post (props){
  return(
    <div style={{backgroundColor : 'lightsalmon', margin:'20px', padding:'20px', border: '4px solid salmon'}}>
      <h2>Title: {props.title} </h2>
      <p>Body: {props.body} </p>
    </div>
  )
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
