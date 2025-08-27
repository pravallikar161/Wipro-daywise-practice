import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  imports: [MatStepperModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './stepper.html',
  styleUrl: './stepper.css',
})
export class Stepper {
  nameForm: FormGroup;
  ageForm: FormGroup;
  emailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.nameForm = this.fb.group({
      name: ['', Validators.required],
    });
    this.ageForm = this.fb.group({
      age: ['', [Validators.required, Validators.min(1)]],
    });
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit() {
    const formData = {
      name: this.nameForm.value.name,
      age: this.ageForm.value.age,
      email: this.emailForm.value.email,
    };
    console.log('Form Data:', formData);
    alert('Form Submitted! Check console for details.');
  }
}
