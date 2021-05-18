import React from 'react';
import Board from './Board.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   squares: [
    //     Array(9).fill(null),
    //   ],
    //   currentIndex: [ 0 ],
    //   step: 0,
    // };
    this.state = {
      // squares: Array(9).fill(null)
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0
    }
  }


  handleChange({ index }) {
    // const data = this.state.squares.slice();
    // const currentData = data[data.length? data.length- 1 : 0];
    // const currentIndex = this.props.currentIndex.slice();
    // currentIndex.push(currentIndex[currentIndex.length -1] + 1);
    // currentData[index] = 'X';
    // this.setState({ currentIndex });

    // this.setState({ squares :data});

    // this.setState({ squares :data});
    // const data = this.state.squares.slice();
    // data.splice(index, 1, 'X')
    // this.setState({ squares :data});



  };

  handleInput(e) {
    const val = e.target.value;
    const currentIndex = this.props.currentIndex.slice();
    currentIndex.push(val);
    this.setState({ currentIndex })
  }

  handleOneStep(mark) {
    if (mark === 'cancel') {
      this.setState({ step: this.state.step - 1 })

    } else {
      if (this.state.step < this.state.squares.length) {
        this.setState({ step: this.state.step + 1 })
      } else {
        this.setState({ step: this.state.step })
      }

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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  // 点击函数
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
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
      console.log(step, move, 'moves');
      const desc = move ?
      'Go to move #' + move :
      'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    })
    console.log(moves, 'moves-00')
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