import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [UserService]
})
export class UserDetailComponent {

  public title: string;
  public token: any;
  public user:User;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ){
    this.title = 'Perfil del usuario';
    this.token = this._userService.getToken();
    this.user = new User(1, 'ROLE_USER', '', '', '', '');

  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){

    this._route.params.subscribe(params => {

      let id = + params['id'];
      this._userService.getTicket(this.token, id).subscribe(

        response =>{

          if(response.status == 'success'){
            this.user = response.users;

          }else{
            this._router.navigate(['usuario-tickets']);
          }

        },
        error => {
          console.log(<any>error);
        }
       )
    })

  }



}
