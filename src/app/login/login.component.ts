import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }
  formdata: any;

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  login(data: any) {
    if (data.username == '' && data.password == '') { 
      alert('Please enter both username and password');
    }
    else{
      this.api.get("login/" + data.username + '/' + data.password).subscribe((result: any) => {

        if (result.verify_status == 'Y' && result.flag == true) {
          this.router.navigate([result.post]);
          localStorage.setItem('data', JSON.stringify(result));
        }
        else {
          alert('Invalid username or password');
        }
      },
        (error: any) => {
  
          alert(error.status + " " + error.statusText);
          console.log(error);
  
        });
    }
  
  }
}
