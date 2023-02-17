/**
 *
 * @autor Christian Felipe Martinez Castaño
 * 2023
 *
 */
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GLOBAL } from "./global";
//import { User } from "../models/user";

@Injectable()

export class UserService {
  public url: string;

  public token: any;
  public identity: any;

  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url
  }

  /**
   * Registra un usuario
   *
   * @param any user
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */
  register(user: any):Observable<any>
  {

    let params = {
      'name': user.name,
      'surname': user.surname,
      'email': user.email,
      'password': user.password
    }

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url+'register', params, {headers: headers});

  }

  /**
   * valida credenciales de un usuario y retorna el token o la data del usuario
   *
   * @param any user
   * @param any gettoken
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */
  signup(user: any, gettoken:any = ''):Observable<any>
  {

    if(gettoken != ''){
      user.gettoken = 'true';
    }else{
      user.gettoken = gettoken;
    }

    let params = {
      'email': user.email,
      'password': user.password,
      'gettoken': gettoken
    }

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'login', params, {headers: headers});

  }

  /**
   * Registra el localStorage de la data del usuario
   *
   * @autor Christian Felipe Martinez Castaño
   *
   */
  getIdentity()
  {

    let identity = JSON.parse(localStorage.getItem('identity') || '{}');

    if(identity != "undefined"){
      this.identity = identity;
    }else{
      this.identity = null;
    }
    return this.identity;
  }

  /**
   * Registra el localStorage del token
   *
   * @autor Christian Felipe Martinez Castaño
   *
   */
  getToken()
  {

    let token = localStorage.getItem('token');

    if(token != "undefined"){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }

   /**
   * Consume el API, retorna los productos de un usuario
   *
   * @param any token
   * @param any id
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */

    getUserProduct(token:any, id:any):Observable<any>
    {

      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                     .set('Authorization', token);

      return this._http.get(this.url + 'user-producto/' + id,  {headers: headers});

    }

  /**
   * Consume el API, retorna todos los usuarios
   *
   * @param any token
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */

    getUserAll(token:any):Observable<any>
    {

      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                      .set('Authorization', token);

      return this._http.get(this.url + 'userAll',  {headers: headers});

    }


   /**
   * Consume el API, retorna los productos de un usuario
   *
   * @param any token
   * @param any id
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */

    getUserEmail(token:any, email:any):Observable<any>
    {

      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', token);

      return this._http.get(this.url + 'userAllemail/' + email,  {headers: headers});

    }

 /**
   * Consume el API, trae el detalle de un usuario
   *
   * @param any token
   * @param any id
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */

  getTicket(token:any, id:any):Observable<any>
  {

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                   .set('Authorization', token);

    return this._http.get(this.url + 'userDetail/' + id,  {headers: headers});

  }

}
