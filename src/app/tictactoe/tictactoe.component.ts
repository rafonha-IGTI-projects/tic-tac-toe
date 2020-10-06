import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent {

  currentPlayer: string = "O";
  winner: string = '';
  board: string[][] = [
    ['','',''],
    ['','',''],
    ['','','']
  ]

  processPlay(row: number, col: number) {
    if(this.board[row][col] == '' && this.winner == '') {
      this.board[row][col] = this.currentPlayer;

      if(this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
        alert(`Player ${this.currentPlayer} is the winner!`)
      }

      if (this.currentPlayer =='O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
  }

  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true;
      }
    }

    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
        return true;
      }
    }

    if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player) {
      return true;
    }

    if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player) {
      return true;
    }

    return false;
  }

  reset() {
    this.currentPlayer = "O";
    this.winner = '';
    this.board = [
      ['','',''],
      ['','',''],
      ['','','']
    ]
  }

}
