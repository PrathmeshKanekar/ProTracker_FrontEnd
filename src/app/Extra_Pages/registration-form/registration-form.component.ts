import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
  data:any = [];
  form_data:any;

  constructor(){}
  
  ngOnInit(): void {
    this.form_data = new FormGroup({
      Class:new FormControl(''),
      Div:new FormControl(''),
      Batch:new FormControl(''),
      Group_No:new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      security_question: new FormControl(''),
      security_question_ans: new FormControl(''),
    })
    
    this.Add(1);
  }

  Add(count:number){
    let data = [{
      enrollment_no:0,
      roll_no:0,
      name:''
    }];

    this.data.push(data);
  }

}
