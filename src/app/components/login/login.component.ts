/**
 *
 * @autor Christian Felipe Martinez Castaño
 * 2023
 *
 */
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { User } from "src/app/models/user";

import { UserService } from "src/app/services/user.service";

@Component({

  selector: 'login',
  templateUrl: 'login.component.html',
  providers: [UserService]
})

export class LoginComponent implements OnInit{

  public title: string;
  public user:User;
  public status: string = '';
  public token: any;
  public identity: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ){
    this.title = 'Iniciar sesión';
    this.user = new User(1, 'ROLE_USER', '', '', '', '');
  }

  ngOnInit(): void {
    let user = this._userService.getIdentity();
    this.logout();
  }


  onSubmit(form: any){

    //retorna la data del usuario en token
    this._userService.signup(this.user, 'false').subscribe(

      response => {

        if(response.token != 'error'){

          this.status = response.status;
          this.token = response.token;

          localStorage.setItem('token', this.token);

          //retorna la data del usuario sin token
          this._userService.signup(this.user, 'true').subscribe(

            response => {

              this.status = response.status;
              this.identity = response.token;

              localStorage.setItem('identity', JSON.stringify(this.identity));

              this._router.navigate(['inicio']);

            },
            error => {
              this.status = 'error';
            }
          )

        }else{
          this.status = 'error';
        }

      },
      error => {
        console.log(<any>error);
        this.status = 'error';
      }
    )

  }

  logout(){
    this._route.params.subscribe(params => {

      let logout = +params['sure'];

      if( logout == 1 ){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = '';
        this.token = '';

        this._router.navigate(['inicio']);

      }

    });

  }

}
