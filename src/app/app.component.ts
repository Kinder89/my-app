import { Component, OnInit} from '@angular/core';
import {FormBuilder , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  contactForm: FormGroup;
  submitted: boolean;
  
  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required,  Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.maxLength(150)]
    });
  }


  get form() {
    return this.contactForm.controls;
  }


  comment = [''];


  remove(index) {
    this.comment.splice(index, 1)
  }
  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return
    }
    console.log(this.contactForm.value);
  }



}


