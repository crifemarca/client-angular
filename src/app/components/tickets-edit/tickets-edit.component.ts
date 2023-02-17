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
  selector: 'app-tickets-edit',
  templateUrl: '../tickets-new/tickets-new.component.html',
  styleUrls: ['./tickets-edit.component.scss'],
  providers: [UserService, TicketsService]
})
export class TicketsEditComponent {

  public page_title: string;
  public token: any;
  public tickets: Tickets;
  public status_tickets:any;
  public user: Array<User>;
  public selecUser:any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _ticketsService: TicketsService
  ){
    this.page_title = 'Editar ticket';
    this.token = this._userService.getToken();
    this.tickets = new Tickets(1, '','', '', null, null,null,null);
    this.user = [];
  }


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = + params['id'];
      this.getTicket(id);
   })
  }

  getTicket(id:any){

      this._ticketsService.getTicket(this.token, id).subscribe(

        response =>{

          if(response.status == 'success'){
            this.tickets = response.tickets;
            this.page_title = "Editar ticket " + this.tickets.title;
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
          this.status_tickets = 'error';
        }
       )

  }

  onSubmit(form: any){

    this._ticketsService.update(this.token, this.tickets, this.tickets.id).subscribe(

     response =>{

       if(response.status == 'success'){

         this._router.navigate(['inicio']);

       }else{
         this.status_tickets = 'error';
       }

     },
     error => {
       console.log(<any>error);
       this.status_tickets = 'error';
     }

    )

   }

}
