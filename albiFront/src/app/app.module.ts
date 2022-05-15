import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubletsiteComponent } from './subletsite/subletsite.component';
import { SubletsComponent } from './subletsite/sublets/sublets.component';
import { SellersComponent } from './subletsite/sellers/sellers.component';
import { HttpClientModule } from '@angular/common/http';
import { SubletAddComponent } from './subletsite/sublet-add/sublet-add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { SubletDeleteComponent } from './subletsite/sublet-delete/sublet-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    SubletsiteComponent,
    SubletsComponent,
    SellersComponent,
    SubletAddComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    SubletDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
