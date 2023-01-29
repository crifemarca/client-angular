/**
 *
 * @autor Christian Felipe Martinez Castaño
 * 2023
 *
 */
 import { Component, OnInit } from "@angular/core";
 import { Router, ActivatedRoute, Params } from "@angular/router";
 import { UserService } from "src/app/services/user.service";
 import { ProductsService } from "src/app/services/products.services";
 import { Products } from "src/app/models/products";


@Component({
  selector: 'app-usuario-productos',
  templateUrl: './usuario-productos.component.html',
  styleUrls: ['./usuario-productos.component.scss'],
  providers: [UserService, ProductsService]
})
export class UsuarioProductosComponent {

  public title: any;
  public token: any;
  public products: Products;
  public userProductos: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _productsService: ProductsService
  ){
    this.title = '';
    this.token = this._userService.getToken();
    this.products = new Products(1, '','', 1, '', null, null);
    this.userProductos ='';
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){

    this._route.params.subscribe(params => {

      let id = + params['id'];
      this._userService.getUserProduct(this.token, id).subscribe(

        responseP =>{

          if(responseP.status == 'success'){
            this.userProductos = responseP.products;
            this.title = 'Esta es la lista de los productos que tiene el usuario '
            + responseP.products[0].name;
          }

        },
        error => {
          console.log(<any>error);
        }
       )

    })

  }

}


