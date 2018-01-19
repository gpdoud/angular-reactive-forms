import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `    
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
        Name: <input class="form-control" type="text" formControlName="name" />
      <div>
        <span [hidden]="form.controls.name.valid">Name is required</span>
      </div>
      <div>
        Role: <input class="form-control" type="text" formControlName="role" />
        <span [hidden]="form.controls.role.valid">Role is required</span>
      </div>
      <div>
        Age: <input class="form-control" type="number" formControlName="age" />
        <span [hidden]="form.controls.age.valid">Age is required</span>
      </div>
      <div>
        Age: <input class="form-control" type="date" formControlName="bday" />
        <span [hidden]="form.controls.bday.valid">Birthday is required</span>
      </div>
      <div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
  `,
  styles: [
    "input.ng-invalid { border-left: 5px solid #a94442; }",
    "input.ng-valid { border-left: 5px solid #42a948; }",
    "form { padding: 20px; }"
  ]
})
export class AppComponent implements OnInit {

  form: FormGroup;
  model = { id: 1, name: 'Greg', role: 'instructor', age: 60, bday: '1957-08-27' };

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log("onSubmit()", this.model);
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name: [this.model.name, Validators.required],
      role: [this.model.role, Validators.required],
      age: [this.model.age, Validators.required],
      bday: [this.model.bday, Validators.required]
    });

  }
}
