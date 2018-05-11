import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListComponent } from './list/list.component';
import { PersonService } from './person.service';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserlistService } from './userlist.service';
import { NewUserComponent } from './new-user/new-user.component';
import { BsDropdownModule, TooltipModule, ModalModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    LoginComponent,
    NewUserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [PersonService, UserlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
