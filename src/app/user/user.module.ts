import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaytableComponent } from './dashboard/paytable.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogOverviewExampleDialog, EditcondoComponent } from './dashboard/editcondo/editcondo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    PaytableComponent,
    DialogOverviewExampleDialog,
    EditcondoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatRadioModule,
    FlexLayoutModule,
    DragDropModule
  ]
})
export class UserModule { }
