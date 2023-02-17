/**
 *
 * @autor Christian Felipe Martinez Castaño
 * 2023
 *
 */
export class Tickets{

  constructor(
    public id: number,
    public title: string,
    public description: string,
    public status: string,
    public createAt: any,
    public updateAt: any,
    public user_id?:any,
    public user?:any,
    public usu?:any
  ){}

}
