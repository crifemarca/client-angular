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

import { ProductsNewComponent } from './components/products-new/products-new.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { UsuarioProductosComponent } from './components/usuario-productos/usuario-productos.component';


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
  {path:'crear-product', component:ProductsNewComponent},
  {path:'editar-product/:id', component:ProductsEditComponent},
  {path:'product/:id', component:ProductsDetailComponent},
  {path:'usuario-producto/:id', component:UsuarioProductosComponent},
  {path:'**', component:DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
