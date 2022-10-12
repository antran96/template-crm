import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickSignUpBtn() {
    const container = document.querySelector('.login-container')
    container?.classList.add('sign-up-mode')
  }

  clickSignInBtn() {
    const container = document.querySelector('.login-container')
    container?.classList.remove('sign-up-mode')
  }

}
