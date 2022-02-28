import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SubletsComponent } from './subletsite/sublets/sublets.component'; 
import { SubletsiteComponent } from './subletsite/subletsite.component'; 
import { SubletAddComponent } from './subletsite/sublet-add/sublet-add.component'; 

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: SubletsiteComponent},
    {path: 'sublets', component: SubletsiteComponent},
    {path: 'sublets-add', component: SubletAddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
