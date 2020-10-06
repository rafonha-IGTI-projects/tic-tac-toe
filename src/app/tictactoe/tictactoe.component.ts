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

      if (this.currentPlayer =='O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
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
