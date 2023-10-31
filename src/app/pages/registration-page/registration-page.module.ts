import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import {
  LabelWrapperModule,
  PasswordInputModule,
  TextInputModule,
} from 'form-controls'

import { RegistrationPageComponent } from './registration-page.component'
import { RegistrationPageRoutingModule } from './registration-page-routing.module'
import { FormContainerModule } from '../../components/form-container/form-container.module'
import { RouterLinkModule } from '../../components/router-link/router-link.module'
import { ButtonModule } from '../../components/button/button.module'

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    RegistrationPageRoutingModule,
    RouterLinkModule,
    FormContainerModule,
    ReactiveFormsModule,
    LabelWrapperModule,
    TextInputModule,
    ButtonModule,
    PasswordInputModule,
  ],
  exports: [RegistrationPageComponent],
})
export class RegistrationPageModule {}