import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
// import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
// import { AuthGuard } from "./auth-guard.service";
import { canDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { canActivateChildGuard } from "./auth-guard.service";
import { serverResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  { path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [canActivateChildGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: serverResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [canDeactivateGuard] }
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
