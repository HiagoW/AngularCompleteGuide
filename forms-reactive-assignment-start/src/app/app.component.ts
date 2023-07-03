import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      'name': new FormControl(null, Validators.required),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

}
