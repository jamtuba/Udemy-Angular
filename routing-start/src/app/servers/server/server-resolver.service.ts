import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";
import { Injectable, inject } from "@angular/core";

interface Server {
  id: number;
  name: string;
  status: string;
}

// @Injectable()
// export class ServerResolver implements Resolve<Server>{

//   constructor(
//     private serversService: ServersService
//   ) { }

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server{
//     return this.serversService.getServer(+route.params['id']);
//   }
// }

export const serverResolver: ResolveFn<Server> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Server> | Promise<Server> | Server => {
  return inject(ServersService).getServer(+route.params["id"]);
};
