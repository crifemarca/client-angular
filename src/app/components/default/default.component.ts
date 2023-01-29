/**
 *
 * @autor Christian Felipe Martinez Castaño
 * 2023
 *
 */
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
//import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";
import { ProductsService } from "src/app/services/products.services";
import { Products } from "src/app/models/products";

@Component({
  selector: 'default',
  templateUrl: 'default.component.html',
  providers: [UserService, ProductsService]
})

export class DefaultComponent implements OnInit
{

  public title: string;
  public token: any;
  public products: Array<Products>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _productsService: ProductsService
  ){
    this.title = 'Lista de productos';
    this.token = this._userService.getToken();
    this.products = [];
  }

  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(){

    this._productsService.getProducts(this.token).subscribe(

      response =>{

        // console.log(response);
        // console.log(response.products[0].user.name);
        if(response.status == 'success'){
          this.products = response.products;


          console.log(this.products);


          this._router.navigate(['inicio']);
        }
      },
      error => {
        console.log(<any>error);
      }
     )

  }

  deleteProduct(id:any){

    this._productsService.delete(this.token, id).subscribe(

      response =>{

        if(response.status == 'success'){
          this.getProducto();
        }

      },
      error => {
        console.log(<any>error);
      }
     )
  }

}
