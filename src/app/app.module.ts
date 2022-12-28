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
import { ReactiveFormsModule } from '@angular/forms';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { AddUserDetailComponent } from './component/user/add-user-detail/add-user-detail.component';
import { AddComplainComponent } from './component/complain/add-complain/add-complain.component';
import { ComplainDetailsComponent } from './component/complain/complain-details/complain-details.component';
import { ComplainsListComponent } from './component/complain/complains-list/complains-list.component';
import { BoardcomlpainComponent } from './boardcomlpain/boardcomlpain.component';
import { AddComplEmpComponent } from './component/mod/add-compl-emp/add-compl-emp.component';
import { AddComplFldComponent } from './component/eng/add-compl-fld/add-compl-fld.component';
import { BoardEngineerComponent } from './board-engineer/board-engineer.component';
import { UserBoardComponent } from './user-board/user-board.component';
import { AllEngineerComponent } from './allUsers/all-engineer/all-engineer.component';
import { AllWorkerComponent } from './allUsers/all-worker/all-worker.component';
import { AllUserComponent } from './allUsers/all-user/all-user.component';
import { UserInfoComponent } from './allUsers/user-info/user-info.component';
import { BoardFieldworkerComponent } from './board-fieldworker/board-fieldworker.component';
import { UserinfoupdateComponent } from './allUsers/userinfoupdate/userinfoupdate.component';
import { TestaComponent } from './testa/testa.component';
import { ComplainInfoComponent } from './allUsers/complain-info/complain-info.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateUserComponent } from './board-admin/create-user/create-user.component';
import { UpdateUserComponent } from './board-admin/update-user/update-user.component';

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
    UserBoardComponent,
    AddComplEmpComponent,
    AddComplFldComponent,
    BoardEngineerComponent,
    AllEngineerComponent,
    AllWorkerComponent,
    AllUserComponent,
    UserInfoComponent,
    BoardFieldworkerComponent,
    UserinfoupdateComponent,
    TestaComponent,
    ComplainInfoComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CreateUserComponent,
    UpdateUserComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
