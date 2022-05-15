import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubletsComponent } from './subletsite/sublets/sublets.component';
import { SubletAddComponent } from './subletsite/sublet-add/sublet-add.component';
import { SubletDeleteComponent } from './subletsite/sublet-delete/sublet-delete.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  { path: 'home', component: SubletsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'add', component: SubletAddComponent },
  { path: 'delete', component: SubletDeleteComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
