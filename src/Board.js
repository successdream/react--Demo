
import React from 'react';
import Square from './Square.js'
class Board extends React.Component {
  // 问题1 遍历DOM节点的方法
  // 问题2 子组件改变父组件的数据的方法
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   }

  // }
  renderSquare(i) {
    return (
    <Square  
      value={this.props.data[i]}
      onClick={() => this.props.onClick(i)}
    />
    );
  }

  render() {
    return (
      <div>
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
        </div>
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