import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  formGroup: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished']

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      'name': new FormControl(null, [Validators.required], this.usernameValidator),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(this.projectStatus[0])
    })
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

  // usernameValidator(control: FormControl): {[s:string]: boolean} {
  //   if (control.value === 'Test') {
  //     return {'testUsername': true};
  //   }
  //   return null;
  // }

  usernameValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'testUsername': true});
        } else {
          resolve(null);
        }
      },1500)
    })
    return promise;
  }

}
