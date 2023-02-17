/**
 *
 * @autor Christian Felipe Martinez Castaño
 * 2023
 *
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';

import { TicketsNewComponent } from './components/tickets-new/tickets-new.component';
import { TicketsEditComponent } from './components/tickets-edit/tickets-edit.component';
import { TicketsDetailComponent } from './components/tickets-detail/tickets-detail.component';
import { UsuarioTicketsComponent } from './components/usuario-tickets/usuario-tickets.component';

import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [

  /**
   * Rutas del SPA
   *
   * @autor Christian Felipe Martinez Castaño
   *
   */

  {path:'', component:DefaultComponent},
  {path:'inicio', component:DefaultComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegisterComponent},
  {path:'logout/:sure', component:LoginComponent},
  {path:'crear-ticket', component:TicketsNewComponent},
  {path:'editar-tickets/:id', component:TicketsEditComponent},
  {path:'ticket/:id', component:TicketsDetailComponent},
  {path:'usuario-tickets', component:UsuarioTicketsComponent},
  {path:'user-detail/:id', component:UserDetailComponent},
  {path:'**', component:DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
