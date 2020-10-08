import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklistComponent } from './pages/tasklist/tasklist.component';
import { NewtaskComponent } from './pages/newtask/newtask.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SortTaskListPipe } from './pipes/sort-task-list.pipe';
import { ShortenStringPipe } from './pipes/shorten-string.pipe';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    TasklistComponent,
    NewtaskComponent,
    AboutComponent,
    ContactComponent,
    SortTaskListPipe,
    ShortenStringPipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    KeyFilterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    DialogModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    AppRoutingModule
  ],
  exports: [
    TasklistComponent,
    NewtaskComponent,
    AboutComponent,
    ContactComponent
  ]
})
export class HomeModule { }
