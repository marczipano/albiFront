import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubletsComponent } from '@components/sublets/sublets.component';
import { SubletAddComponent } from '@components//sublet-add/sublet-add.component';
import { SubletDeleteComponent } from '@components//sublet-delete/sublet-delete.component';
import { RegisterComponent } from '@components/register/register.component';
import { LoginComponent } from '@components/login/login.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { BoardModeratorComponent } from '@components/board-moderator/board-moderator.component';
import { BoardAdminComponent } from '@components/board-admin/board-admin.component';
const routes: Routes = [
  { path: 'home', component: SubletsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'add', component: SubletAddComponent },
  { path: 'delete', component: SubletDeleteComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
