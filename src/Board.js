
import React from 'react';
import Square from './Square.js';
import Test from './test.js'
class Board extends React.Component {
  // 问题1 遍历DOM节点的方法
  // 问题2 子组件改变父组件的数据的方法
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      inputValue: 2
    }
    this.clickFn = this.clickFn.bind(this)
    this.counter = 1;
    this.ref = React.createRef();
  }
  renderSquare(i) {
    return (
    <Square  
      value={this.props.data[i]}
      onClick={() => this.props.onClick(i)}
    />
    );
  }

  clickFn(e) {
    // console.log(this, 'this')
    this.counter++ 
    // console.log(this.counter, 'this.counter-000')
    // this.setState({ newAddValue: this.counter })
    this.setState({ inputValue: this.counter})
  }
  componentDidMount() {
    // const dom = this.ref.current.click()
    // console.log(dom, 'dom-000')
  }

  render() {
    const { newAddValue } = this.state
    return (
      
      <div>
        <div>
          <Square/>
        </div>
        {/* <div>
          <Test testRef={this.ref} left={<div>我是left</div> } right={ <div>我是right</div>}>
              <div>我是slot</div>
          </Test>
        </div> */}
        {/* <button onClick={this.clickFn}>按钮1</button>
        <input type="text" value={ this.state.inputValue} onChange={this.clickFn } />
        <div> { newAddValue } </div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div> */}
      </div>
    );
  }
}

// function Board(props) {
// 问题1 遍历DOM节点的方法
// 问题2 子组件改变父组件的数据的方法,
//  问题3 function 内部如何调用其他的包括再函数内的组件
//   // function 内部定义放大
//   // html 中定义的
//   function renderSquare(i){
//     return (
//     <Square  
//       value={props.data[i]}
//       onClick={this.handleClick(i)}
//     />
//     );
//   }

//   function handleClick(i) {
//     props.parent.handleChange({index: i})
//   }
//   const status = 'Next player: X';
//   return(
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {renderSquare(0)}
//           {renderSquare(1)}
//           {renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {renderSquare(3)}
//           {renderSquare(4)}
//           {renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {renderSquare(6)}
//           {renderSquare(7)}
//           {renderSquare(8)}
//         </div>
//       </div>
//   )


// }


export default Board;