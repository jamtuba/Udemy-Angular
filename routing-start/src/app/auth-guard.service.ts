import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

// @Injectable()
// export class AuthGuard implements CanActivate, CanActivateChild {
//   constructor(
//     private authService: AuthService,
//     private router: Router
//   ) {}

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isAuthenticated().then((authenticated) => {
    if (authenticated) {
      return true;
    } else {
      router.navigate(['/']);
    }
  });
};

export const canActivateChildGuard: CanActivateFn = canActivateGuard;
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
  //   return this.authService.isAuthenticated()
  //     .then(
  //       (authenticated: boolean) => {
  //         if (authenticated) {
  //           return true;
  //         } else {
  //           this.router.navigate(['/']);
  //         }
  //       }
  //     );
  //   }

  // canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
  //   return this.canActivate(route, state);
  // }
// }
