/**
 *
 * @autor Christian Felipe Martinez Castaño
 * 2023
 *
 */
 import { Component, OnInit } from "@angular/core";
 import { Router, ActivatedRoute, Params } from "@angular/router";
 import { UserService } from "src/app/services/user.service";
 import { TicketsService } from "src/app/services/tickets.services";
 import { Tickets } from "src/app/models/tickets";
 import { User } from "src/app/models/user";

@Component({
  selector: 'app-usuario-tickets',
  templateUrl: './usuario-tickets.component.html',
  styleUrls: ['./usuario-tickets.component.scss'],
  providers: [UserService, TicketsService]
})
export class UsuarioTicketsComponent {

  public title: any;
  public token: any;
  public user:User;
  public status_user: any = '';
  public usuarioData: Array<User>;
  public cantidadUser:any = 0;

  public lineChartData: Array<any>=[];
  public lineChartLabels:Array<any> = ['Cantidad de usuarios'];

  public lineChartOptions:any = {
    responsive: true
  }

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ){
    this.title = '';
    this.token = this._userService.getToken();
    this.user = new User(1, 'ROLE_USER', '', '', '', '');
    this.usuarioData = []
  }

  ngOnInit(): void {

  }

  onSubmit(form: any){

    this._userService.getUserEmail(this.token, this.user.email).subscribe(

     response =>{

       if(response.status == 'success'){

         this.usuarioData = response.users;
         this.status_user = 'success';
         this.cantidadUser = response.users.length;

          this.lineChartData= [
          {
            data: [ this.cantidadUser ],
            label: 'Series A',
            backgroundColor: '#846bf7',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            fill: 'origin',
           }
          ];

       }else{
          this.status_user = 'error';
       }

     },
     error => {
       this.status_user = 'error';
     }

    )

   }

}
