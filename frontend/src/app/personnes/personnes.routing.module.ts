import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UtilisateursComponent} from "./utilisateurs/utilisateurs.component";
import {DetailUtilisateurComponent} from "./utilisateurs/detail-utilisateur/detail-utilisateur.component";
import {RoleGuard} from "../authentication/guards/role.guard";
import {Role} from "../model/user.roles";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Personnes'
    },
    children: [
      {
        path: '',
        redirectTo: 'utilisateurs'
      },
      {
        path: 'utilisateurs',
        component: UtilisateursComponent,
        canActivate: [RoleGuard],
        data: {
          title: 'Utilisateurs',
          roles: [Role.Admin, Role.AdvancedUser]
        },
      },
      {
        path: 'utilisateurs/details/:id',
        component: DetailUtilisateurComponent,
        data: {
          title: 'Details de l\'utilisateur'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnesRoutingModule {
}
