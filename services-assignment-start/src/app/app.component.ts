import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent{

  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  constructor(private counterService: CounterService) {
                this.counterService.activeToInactiveEmitter.subscribe(
                  (total: number) => this.activeToInactive = total
                )
                this.counterService.inactiveToActiveEmmiter.subscribe(
                  (total: number) => this.inactiveToActive = total
                )
              }
}
