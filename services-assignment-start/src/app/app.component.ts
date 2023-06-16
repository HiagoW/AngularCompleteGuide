import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  constructor(private usersService: UsersService,
              private counterService: CounterService) {
                this.counterService.activeToInactiveEmitter.subscribe(
                  (total: number) => this.activeToInactive = total
                )
                this.counterService.inactiveToActiveEmmiter.subscribe(
                  (total: number) => this.inactiveToActive = total
                )
              }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
