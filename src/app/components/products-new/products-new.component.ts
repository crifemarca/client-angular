/**
 *
 * @autor Christian Felipe Martinez Castaño
 * 2023
 *
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { ProductsService } from "src/app/services/products.services";
import { Products } from "src/app/models/products";
import { User } from "src/app/models/user";

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.scss'],
  providers: [UserService, ProductsService]
})
export class ProductsNewComponent {

  public page_title:string;
  public token: any;
  public identity: any;
  public products: Products;
  public status_products:any;
  public usuarios:any;
  public user: Array<User>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _productsService: ProductsService
    ){
    this.page_title = 'Crear nuevo producto';

    //crear objeto producto
    this.products = new Products(1, '','', 1, '', null, null,'','');

    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = [];
  }

  ngOnInit(): void {

    this.getUserAll();

    //Si no esta logueado lo redirecciona al login
    if(this.identity.sub == undefined ){

      this._router.navigate(['/login']);

    }

  }

  onSubmit(form: any){

    this._productsService.create(this.token, this.products).subscribe(

     response =>{

       if(response.status == 'success'){

         this.products = response.product;
         this.status_products = response.status;

         this._router.navigate(['inicio']);

       }else{
         this.status_products = 'error';
       }

     },
     error => {
       this.status_products = 'error';
     }

    )

   }

   getUserAll(){

    this._userService.getUserAll(this.token).subscribe(

      response =>{

        if(response.status == 'success'){
          this.user = response.usuarios;
        }

      },
      error => {
        this.status_products = 'error';
      }

     )

   }

}
