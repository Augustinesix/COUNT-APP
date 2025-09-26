
import React, {useState} from 'react'


const CountApp = () => {
  const [count, setCount] = useState(0);
  const tap = {
    color: 'blue',
    textAlign:'center',
    marginTop:'1%'
  };
  const counter={
    textAlign:'center',
    fontWeight:'bold',
    fontSize:'30px',
  }
  const btn ={
    margin:'20px',
    textAlign:'center',
    marginLeft:'70px',
    fontSize:'20px',
    padding:'10px',
    borderRadius:'10px',
    backgroundColor:'aqua',
    cursor:'pointer'
  }
  const about={
    color:'green',
    textAlign:'center',
    marginTop:'30%',
  }

  return (
    <div>
      <h1 style={tap} id='tap'>JUST TAP</h1>
      <p style={counter} id='counter'>Count:0{count}</p>
      <button style={btn} className='Btn' onClick={() => setCount(count +1)}>Increment</button>
      <button style={btn}  className='Btn' onClick={() => setCount(count -1)}>Decrement</button>
      <button style={btn}  className='Btn' onClick={() => setCount(0)}>Reset
</button>
   
     <h1 style={about} class="about" > THIS WORK IS DONE BY JOHN ITORO</h1>
    </div>
  )
}

export default CountApp