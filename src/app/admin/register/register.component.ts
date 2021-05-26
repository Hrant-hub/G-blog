import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {registers} from '../../shared/interfaces';
import {register} from 'ts-node';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  submitted = false
  message: string
  load: boolean;
  constructor(
      public auth: AuthService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    setTimeout(() => {
      return this.load = true
    },1000)
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      retypepassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  submit() {
    console.log(this.form)
    if(this.form.invalid) {
      return
    }
    const register: registers = {
      email: this.form.value.email,
      password: this.form.value.password,
      retypepassword: this.form.value.retypepassword
    }
    this.auth.signup(register).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/admin','dashboard'])
    })
    if(this.form.value.password !== this.form.value.retypepassword) {
      return
    }
  }
}
