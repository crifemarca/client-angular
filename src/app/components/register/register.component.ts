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
  selector: 'register',
  templateUrl: 'register.component.html',
  providers: [UserService]
})

export class RegisterComponent implements OnInit{

  public title: string;
  public user:User;
  public status: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ){
    this.title = 'Registrate';
    this.user = new User(1, 'ROLE_USER', '', '', '', '');
  }

  ngOnInit(): void {
    console.log("Register cargadoooo");
  }

  onSubmit(){

    this._userService.register(this.user).subscribe(

      response => {
        this.status = response.status;
        if(response.status == 'success'){
          //vaciar el formulario - objeto
          this.user = new User(1, 'ROLE_USER', '', '', '', '');
        }
      },
      error => {
        console.log(<any>error);
        this.status = 'error';
      }
    )

  }

}
