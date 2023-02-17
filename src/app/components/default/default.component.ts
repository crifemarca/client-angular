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

@Component({
  selector: 'default',
  templateUrl: 'default.component.html',
  providers: [UserService, TicketsService]
})

export class DefaultComponent implements OnInit
{

  public title: string;
  public token: any;
  public tickets: Array<Tickets>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _ticketsService: TicketsService
  ){
    this.title = 'Lista de tickets';
    this.token = this._userService.getToken();
    this.tickets = [];
  }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(){

    this._ticketsService.getTickets(this.token).subscribe(

      response =>{

        if(response.status == 'success'){
          this.tickets = response.tickets;

          this._router.navigate(['inicio']);
        }
      },
      error => {
        console.log(<any>error);
      }
     )

  }

  deleteTicket(id:any){

    this._ticketsService.delete(this.token, id).subscribe(

      response =>{

        if(response.status == 'success'){
          this.getTickets();
        }

      },
      error => {
        console.log(<any>error);
      }
     )
  }

}
