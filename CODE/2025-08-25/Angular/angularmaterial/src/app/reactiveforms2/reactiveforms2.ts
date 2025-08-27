import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reactiveforms2',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  templateUrl: './reactiveforms2.html',
  styleUrl: './reactiveforms2.css',
})
export class Reactiveforms2 {
  regForm: FormGroup;
  subjects: string[] = ['Angular', 'SpringBoot', 'Java', 'Python', 'React'];

  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      subject: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.regForm.valid) {
      console.log('Form Submitted', this.regForm.value);
      alert('Registration Successful!');
      this.regForm.reset();
    } else {
      console.log('Form Not Valid');
      this.regForm.markAllAsTouched();
    }
  }
}
