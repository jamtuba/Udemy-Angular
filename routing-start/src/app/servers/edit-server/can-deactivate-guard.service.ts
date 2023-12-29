import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/Observable";

// export interface CanComponentDeactivate {
//     canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }
export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

// export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

//   constructor() { }

//   canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     return component.canDeactivate();
//   }
// }
export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> =
(
  component: CanComponentDeactivate,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot
):  Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> |
    boolean |
    UrlTree => {
  return component.canDeactivate();
}

