import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserAccessService} from '../../services/auth/user-access.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  result: boolean;
  hide = true;

  constructor(private formBuilder: FormBuilder , private service: UserAccessService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]]
    });
  }

  onLoginSubmit() {
    this.service.loginMethod(this.user).subscribe(result => {
      this.result = result;
      if(this.result) {
        this.router.navigate(['/']);
      }
    });
  }

}
