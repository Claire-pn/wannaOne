import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { HttpClientModule} from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ListComponent } from './list/list.component';
import {MatTableModule} from '@angular/material/table';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserDataServiceService } from './user-data-service.service';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';
import { ErrorComponent } from './error/error.component';

const appRoutes:Routes=[
{path : '',component:HomeComponentComponent},
{path : 'notFound',component:ErrorComponent},
{path : 'view/:id',component:ViewComponent},
{path : 'dashboard',component:DashboardComponent},
{path : 'home',component:HomeComponentComponent},
{path : '**',redirectTo:'/notFound'},
];


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    HomeComponentComponent,
    DashboardComponent,
    ErrorComponent,
    ViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    

  ],
  providers: [UserDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
