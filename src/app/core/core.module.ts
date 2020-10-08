import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from "./user/pages/profile/profile.component";
import { EditprofileComponent } from "./user/pages/editprofile/editprofile.component";
import { AppRoutingModule } from '../app-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    ProfileComponent,
    EditprofileComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AppRoutingModule,
    DropdownModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    InputMaskModule,
    MatButtonModule,
    MatSnackBarModule,
    TooltipModule
  ],
  exports: [
    ProfileComponent,
    EditprofileComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class CoreModule {}
