import React, {  } from 'react';
import Board from './Board.js';
import TestExport from './testExport'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        age: 18
    }
  }
  handleClick() {
    const age = this.state.age + 1;
    this.setState({ age })
  }
  componentDidUpdate(newProps) {
      const { time }  = this.newProps;
      console.log(time, 'componentDidUpdate');
    // useCallback(() => {
    //     console.log('我再time更新的时候执行了', time)
    // }, [time])
  }
  render() {
    return(
        <div>
            <button onClick={ this.handleClick}>按钮</button>
            <div> 数值： { this.props.counter }</div>
            <div> 年龄： { this.state.age }</div>
            <div> 时间 { this.props.time } </div>
        </div>
    )
  }


}
export default Game;