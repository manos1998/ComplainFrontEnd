import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ServicesComponent } from './services/services.component';
import { FaqsComponent } from './faqs/faqs.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { AddUserDetailComponent } from './component/user/add-user-detail/add-user-detail.component';
import { AddComplainComponent } from './component/complain/add-complain/add-complain.component';
import { ComplainDetailsComponent } from './component/complain/complain-details/complain-details.component';
import { ComplainsListComponent } from './component/complain/complains-list/complains-list.component';
import { BoardcomlpainComponent } from './boardcomlpain/boardcomlpain.component';
import { UserBoardComponent } from './user-board/user-board.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ServicesComponent,
    FaqsComponent,
    PageNotFoundComponentComponent,
    AddUserDetailComponent,
    AddComplainComponent,
    ComplainDetailsComponent,
    ComplainsListComponent,
    BoardcomlpainComponent,
    UserBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
