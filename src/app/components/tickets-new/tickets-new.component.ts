/**
 *
 * @autor Christian Felipe Martinez Castaño
 * 2023
 *
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { TicketsService } from "src/app/services/tickets.services";
import { Tickets } from "src/app/models/tickets";
import { User } from "src/app/models/user";

@Component({
  selector: 'app-tickets-new',
  templateUrl: './tickets-new.component.html',
  styleUrls: ['./tickets-new.component.scss'],
  providers: [UserService, TicketsService]
})
export class TicketsNewComponent {

  public page_title:string;
  public token: any;
  public identity: any;
  public tickets: Tickets;
  public status_tickets:any;
  public usuarios:any;
  public user: Array<User>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _ticketsService: TicketsService
    ){
    this.page_title = 'Crear nuevo ticket';

    //crear objeto ticket
    this.tickets = new Tickets(1, '','', '', null, null,'','');

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

    this._ticketsService.create(this.token, this.tickets).subscribe(

     response =>{

       if(response.status == 'success'){

         this.tickets = response.tickets;
         this.status_tickets = response.status;

         this._router.navigate(['inicio']);

       }else{
         this.status_tickets = 'error';
       }

     },
     error => {
       this.status_tickets = 'error';
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
        this.status_tickets = 'error';
      }

     )

   }

}
