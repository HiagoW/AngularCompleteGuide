import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nums: number[] = [];

  onGameStarted(currentNum: number) {
    this.nums.push(currentNum);
  }
}
