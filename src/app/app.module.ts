/**
 *
 * @autor Christian Felipe Martinez Castaño
 * 2023
 *
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { TicketsNewComponent } from './components/tickets-new/tickets-new.component';
import { TicketsEditComponent } from './components/tickets-edit/tickets-edit.component';
import { TicketsDetailComponent } from './components/tickets-detail/tickets-detail.component';
import { UsuarioTicketsComponent } from './components/usuario-tickets/usuario-tickets.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    TicketsNewComponent,
    TicketsEditComponent,
    TicketsDetailComponent,
    UsuarioTicketsComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
