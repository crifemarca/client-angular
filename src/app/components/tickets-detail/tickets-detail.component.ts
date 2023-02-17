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
  selector: 'app-tickets-detail',
  templateUrl: './tickets-detail.component.html',
  styleUrls: ['./tickets-detail.component.scss'],
  providers: [UserService, TicketsService]
})
export class TicketsDetailComponent implements OnInit {

  public title: string;
  public token: any;
  public tickets: Tickets;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _ticketsService: TicketsService
  ){
    this.title = 'Detalle de producto';
    this.token = this._userService.getToken();
    this.tickets = new Tickets(1, '','', '', null, null);
  }

  ngOnInit(): void {
    this.getTicket();
  }

  getTicket(){

    this._route.params.subscribe(params => {

      let id = + params['id'];
      this._ticketsService.getTicket(this.token, id).subscribe(

        response =>{

          if(response.status == 'success'){
            this.tickets = response.tickets;
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
