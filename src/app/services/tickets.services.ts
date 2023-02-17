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

@Injectable()
export class TicketsService {
  public url: string;

  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url
  }

  /**
   * Consume el API, Crear ticket
   *
   * @param any token
   * @param any ticket
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */
  create(token:any, tickets: any):Observable<any>
  {

    let params = {
      'title': tickets.title,
      'description': tickets.description,
      'status': tickets.status,
      'user_id': tickets.user_id
    }

    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                   .set('Authorization', token);

    return this._http.post(this.url+'tickets', params, {headers: headers});

  }

  /**
   * Consume el API, trae el listado de productos
   *
   * @param any token
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */

  getTickets(token:any):Observable<any>
  {

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                   .set('Authorization', token);

    return this._http.get(this.url+'tickets',  {headers: headers});

  }

  /**
   * Consume el API, trae el detalle de un ticket
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

    return this._http.get(this.url + 'tickets/' + id,  {headers: headers});

  }

  /**
   * Consume el API, Actualizar ticket
   *
   * @param any token
   * @param any ticket
   * @param any id
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */
  update(token:any, tickets: any, id:any):Observable<any>
  {

    let params = {
      'title': tickets.title,
      'description': tickets.description,
      'status': tickets.status,
      'user_id': tickets.user_id
    }

    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', token);

    return this._http.put(this.url+'tickets/' + id, params, {headers: headers});

  }

  /**
   * Consume el API, borrar un ticket
   *
   * @param any token
   * @param any id
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */
  delete(token:any, id:any):Observable<any>
  {

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', token);

    return this._http.delete(this.url+'tickets/' + id, {headers: headers});

  }

}
