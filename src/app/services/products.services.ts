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
export class ProductsService {
  public url: string;

  constructor(
    public _http: HttpClient
  ){
    this.url = GLOBAL.url
  }

  /**
   * Consume el API, Crear producto
   *
   * @param any token
   * @param any products
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */
  create(token:any, products: any):Observable<any>
  {

    let params = {
      'title': products.title,
      'description': products.description,
      'price': products.price,
      'status': products.status,
      'user_id': products.user_id
    }

    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                   .set('Authorization', token);

    return this._http.post(this.url+'products', params, {headers: headers});

  }

  /**
   * Consume el API, trae el listado de productos
   *
   * @param any token
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */

  getProducts(token:any):Observable<any>
  {

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                   .set('Authorization', token);

    return this._http.get(this.url+'products',  {headers: headers});

  }

  /**
   * Consume el API, trae el detalle de un producto
   *
   * @param any token
   * @param any id
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */

  getProduct(token:any, id:any):Observable<any>
  {

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                   .set('Authorization', token);

    return this._http.get(this.url + 'products/' + id,  {headers: headers});

  }

  /**
   * Consume el API, Actualizar producto
   *
   * @param any token
   * @param any products
   * @param any id
   * Observable
   * @autor Christian Felipe Martinez Castaño
   *
   */
  update(token:any, products: any, id:any):Observable<any>
  {

    let params = {
      'title': products.title,
      'description': products.description,
      'price': products.price,
      'status': products.status,
      'user_id': products.user_id
    }

    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', token);

    return this._http.put(this.url+'products/' + id, params, {headers: headers});

  }

  /**
   * Consume el API, borrar un producto
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

    return this._http.delete(this.url+'products/' + id, {headers: headers});

  }

}
