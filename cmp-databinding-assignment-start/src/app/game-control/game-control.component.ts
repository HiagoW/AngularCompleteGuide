import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<number>();
  currentNum = 0;
  intervalRef: any;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart() {
    if (!this.intervalRef) {
      this.intervalRef = setInterval(() => {
        this.gameStarted.emit(this.currentNum);
        this.currentNum += 1;
      }, 1000);
    }
  }

  onGameStop() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
      this.intervalRef = null;
    }
  }

}
