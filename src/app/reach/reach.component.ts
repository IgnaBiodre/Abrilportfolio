import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reach',
  templateUrl: './reach.component.html',
  styleUrls: ['./reach.component.css']
})

export class ReachComponent implements OnInit {

  reachForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.initForm();
  }
 
  initForm() {
    this.reachForm = this.formBuilder.group({
      name: ['', [
      ]],
      email: ['', [
      ]],
      message: ['', [
      ]],
    })
  }
  submit() {
    console.log(this.reachForm.value);
  }
  
}


