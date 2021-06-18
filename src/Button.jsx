// Button.jsx
import React, { memo, useCallback, useState } from 'react';
let normalCount = 1;
let useCallbackCount = 1
let newCount = 1;

const Button = ({ onClickButton, children,count2,title }) => {
    const [ count, setCount] = useState(0)
    const [ normalCount, setNormalCount] = useState(0)

    const handleClick = () =>{
      setCount(count + 1)
    }
    const fn = useCallback(() => {
      // useCallbackCount = useCallbackCount + 1;
      // const data = count + 1
      // console.log( 'myCount - useCallback')
        // return `我是count${useCallbackCount}`
        // return data;
        // setCount(count + 1);
        console.log(count2)
        return count2 + title;
    }, [title])

    const fn1 = () => {
      // normalCount = normalCount + 1
      // console.log(normalCount, 'normalCount - normal');
      // setNormalCount(normalCount + 1)
      console.log('fn1');
      return Math.random();
    }  
 
  return (
    <div>
      <button onClick={onClickButton}>{ children }</button>
      <span>{Math.random()}</span>
      <button onClick={ handleClick }>设置子组件count</button>
      <div>fn1 useCallback:{fn()}</div>
      <div>fn normal:{fn1()} </div>
      <div>state-count: {count}</div>
    </div>
  );
};

export default memo(Button);
