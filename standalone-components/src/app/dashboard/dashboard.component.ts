import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  // to use routerLink
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
