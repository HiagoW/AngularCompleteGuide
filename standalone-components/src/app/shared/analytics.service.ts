import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
// 2nd approach
// @Injectable()
export class AnalyticsService {
  registerClick() {
    console.log('Clicked!');
  }
}
