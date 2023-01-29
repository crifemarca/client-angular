/**
 *
 * @autor Christian Felipe Martinez Castaño
 * 2023
 *
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { ProductsNewComponent } from './components/products-new/products-new.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { UsuarioProductosComponent } from './components/usuario-productos/usuario-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    ProductsNewComponent,
    ProductsEditComponent,
    ProductsDetailComponent,
    UsuarioProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
