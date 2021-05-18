import React from 'react';
import Board from './Board.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null).map((item) => {
          return {
            value: null,
            coordinate: {
              x: null,
              y: null
            },
            target: false,
          }
        }),
      }],
      xIsNext: true,
      stepNumber: 0
    }
  }

  // 计算赢的人的办法
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
        return squares[a];
      }
    }
    return null;
  }
  // 点击函数
  handleClick(i) {
    const history1 = this.state.history.slice(0, this.state.stepNumber + 1);
    const history = JSON.parse(JSON.stringify(history1))
    const current = history[history.length - 1];
    const row = Math.trunc(i/3) + 1
    const column = i%3 + 1;
    let squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i].value) {
      return;
    }
    squares[i].value = this.state.xIsNext ? 'X' : 'O';
    squares[i].coordinate = {
      x: row,
      y: column
    }
    squares = squares.map((item) => {
      item.target = false;
      return item;
    })
    squares[i].target = true;
    this.setState({
      history: history1.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  
  jumpTo(index) {
    this.setState({
      stepNumber: index,
      xIsNext: (index % 2) === 0,
    });
    
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const winner = this.calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    const moves = history.map((step, move) => {
      const { squares } = step;
      const tar = squares.find((item) => item.target)
      const coordinate = { x: null, y: null}
      if(tar) {
        coordinate.x = tar.coordinate.x;
        coordinate.y = tar.coordinate.y;
      }
      const desc = move ?
      'Go to move #' + move :
      'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
          <div>行：{ coordinate.x } 列：{ coordinate.y}</div>
        </li>
      );
    })
    return (
      <div className="game">
        <div className="game-board">
          <Board
            data={current.squares}
            onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div> 当前步数：{/* status */}</div>
          <div>
            <div>{status}</div>
          </div>
          <ol>
            {moves}
          </ol>
        </div>
      </div>
    );
  }
}
export default Game;