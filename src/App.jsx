import React,{useState} from 'react'
import ListComponents from './container/components/ListComponents'
import UserProfile from './container/components/UserProfile'

const App = () => {
  const[valueA,setValueA]=useState(5);
  const[valueB,setValueB]=useState(10);
  return (
    <div>
      <button onClick={()=>setValueA(valueA+5)}>Increment</button>
      <button onClick={()=>setValueB(valueB+1)}>Decrement</button>
      <ListComponents a={valueA} b={valueB}/>
    
    {/*<UserProfile/>*/}
    </div>


  )
}

export default App
