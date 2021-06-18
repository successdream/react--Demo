import React, { useState, useCallback } from 'react';
import Button from './Button';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleClickButton1 = () => {
    setCount1(count1 + 1);
  };

  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  const handleButton2Click = () => {
    setCount2(count2 + 1)
  }

  return (
    <div>
      {/* <div>
        <Button onClickButton={handleClickButton1} count1={count1} title='an111'>Button1</Button>
      </div> */}
      <div>
        {/* <Button onClickButton={handleClickButton2}>Button2</Button> */}
        <Button count2={ count1 } title={'接电话'}></Button>
        <button  onClick={ handleButton2Click }>更改父组件state == count2: {count2}</button>
      </div>
      {/* <div>
        <Button
          onClickButton={() => {
            setCount3(count3 + 1);
          }}
        >
          Button3
        </Button>
      </div> */}
    </div>
  );
}
