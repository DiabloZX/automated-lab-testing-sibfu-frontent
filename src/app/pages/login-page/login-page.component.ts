import { Component } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'

import { TMappedFormControls } from '../../shared/interfaces/mapped-types.interface'
import { TLogin } from './login-page.interface'
import { LoginPageService } from './login-page.service'
import { EFullRoutes } from '../../shared/router-paths'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [LoginPageService],
})
export class LoginPageComponent {
  loginFormGroup: TMappedFormControls<TLogin> = this.fb.group({
    login: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  })

  controls = this.loginFormGroup.controls
  EFullRoutes = EFullRoutes

  constructor(
    private fb: NonNullableFormBuilder,
    private loginPageService: LoginPageService
  ) {}

  onLoginClick(): void {
    this.loginPageService.login(this.loginFormGroup.getRawValue())
  }
}
