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
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
  providers: [UserService, ProductsService]
})
export class ProductsDetailComponent implements OnInit {

  public title: string;
  public token: any;
  public products: Products;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _productsService: ProductsService
  ){
    this.title = 'Detalle de producto';
    this.token = this._userService.getToken();
    this.products = new Products(1, '','', 1, '', null, null);
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){

    this._route.params.subscribe(params => {

      let id = + params['id'];
      this._productsService.getProduct(this.token, id).subscribe(

        response =>{

          if(response.status == 'success'){
            this.products = response.products;
          }else{
            this._router.navigate(['inicio']);
          }

        },
        error => {
          console.log(<any>error);
        }
       )
    })

  }

}
