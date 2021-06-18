
import React, { useState, useEffect } from 'react'
function Square(props) {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('张宁')
  
  const testOne = (counter) => {
    return counter + 1;
  }

  useEffect(() => {
    console.log(`我是counter${counter}的副作用`)
    let val = false
    console.log(testOne, 'testOne-000')
    // setTimeout(() => {
    //   if(!val){
    //     console.log(12312)
    //     setCounter(counter+1)
    //   }
    // }, 3000)
    // return () => {
    //   val = true;
    // }
  })
  useEffect(() => {
    console.log(`我是name${name}的副作用`)

  })

  const handleClick = (mark) => {
    if(mark === 'name') {
      // console.log()
      // const newCounter = counter + 1;
      // console.log(newCounter, 'newCounter')
      // setCounter(newCounter)
      const val = setName(name + 2)
      console.log('sadsadsa ', val)
    } else {
      // setName(name+0)
      const newCounter = counter + 1;
      // console.log(newCounter, 'newCounter')
      setCounter(newCounter)
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        counter
      </button>
      <button   onClick={handleClick}>
        {/* { props.value.value } */}
        name
      </button>
    </div>
  );
}
export default Square;