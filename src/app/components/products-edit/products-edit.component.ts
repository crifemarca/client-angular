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
 import { User } from "src/app/models/user";

@Component({
  selector: 'app-products-edit',
  templateUrl: '../products-new/products-new.component.html',
  styleUrls: ['./products-edit.component.scss'],
  providers: [UserService, ProductsService]
})
export class ProductsEditComponent {

  public page_title: string;
  public token: any;
  public products: Products;
  public status_products:any;
  public user: Array<User>;
  public selecUser:any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _productsService: ProductsService
  ){
    this.page_title = 'Editar producto';
    this.token = this._userService.getToken();
    this.products = new Products(1, '','', 1, '', null, null,null,null);
    this.user = [];
  }


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = + params['id'];
      this.getProduct(id);
   })
  }

  getProduct(id:any){

      this._productsService.getProduct(this.token, id).subscribe(

        response =>{

          if(response.status == 'success'){
            this.products = response.products;
            this.page_title = "Editar producto " + this.products.title;
          }

        },
        error => {
          console.log(<any>error);
        }
       )
      //trae el combo de usuarios
       this._userService.getUserAll(this.token).subscribe(

        response =>{

          if(response.status == 'success'){
            this.user = response.usuarios;
          }

        },
        error => {
          console.log(<any>error);
          this.status_products = 'error';
        }
       )

  }

  onSubmit(form: any){

    this._productsService.update(this.token, this.products, this.products.id).subscribe(

     response =>{

       if(response.status == 'success'){

         this._router.navigate(['inicio']);

       }else{
         this.status_products = 'error';
       }

     },
     error => {
       console.log(<any>error);
       this.status_products = 'error';
     }

    )

   }

}
