import { Injectable } from '@angular/core'

import { TLogin } from './login-page.interface'
import { TLoginDtoPost } from './login-page.dto'
import { AuthService } from '../../core/auth/auth.service'

@Injectable()
export class LoginPageService {
  constructor(private authService: AuthService) {}

  login(data: TLogin): void {
    this.authService.login(this.serialize(data)).subscribe()
  }

  private serialize(data: TLogin): TLoginDtoPost {
    return data
  }
}
