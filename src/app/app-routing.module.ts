import { TestaComponent } from './testa/testa.component';
import { Complain } from './models/complain.model';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AddUserDetailComponent } from './component/user/add-user-detail/add-user-detail.component';
import { AddComplainComponent } from './component/complain/add-complain/add-complain.component';
import { ComplainDetailsComponent } from './component/complain/complain-details/complain-details.component';
import { ComplainsListComponent } from './component/complain/complains-list/complains-list.component';
import { BoardcomlpainComponent } from './boardcomlpain/boardcomlpain.component';
import { AddComplEmpComponent } from './component/mod/add-compl-emp/add-compl-emp.component';
import { BoardEngineerComponent } from './board-engineer/board-engineer.component';
import { AddComplFldComponent } from './component/eng/add-compl-fld/add-compl-fld.component';
import { AllEngineerComponent } from './allUsers/all-engineer/all-engineer.component';
import { AllUserComponent } from './allUsers/all-user/all-user.component';
import { AllWorkerComponent } from './allUsers/all-worker/all-worker.component';
import { UserInfoComponent } from './allUsers/user-info/user-info.component';
import { BoardFieldworkerComponent } from './board-fieldworker/board-fieldworker.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'eng', component: BoardEngineerComponent },
  { path: 'fld', component: BoardFieldworkerComponent },
  { path: 'faqs', component: FaqsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'addUserDetails', component: AddUserDetailComponent },
  { path: 'complains', component: ComplainsListComponent },
  { path: 'complains/:id', component: ComplainDetailsComponent },
  { path: 'addComplain', component: AddComplainComponent },
  { path: 'coomplain', component: BoardcomlpainComponent},
  { path: 'mod/compUpdate/:id', component: AddComplEmpComponent},
  { path: 'eng/compUpdate/:id', component: AddComplFldComponent},
  { path: 'allEngineer', component: AllEngineerComponent},
  { path: 'allWorker', component: AllWorkerComponent},
  { path: 'allUser', component: AllUserComponent},
  { path: 'userInfo/:id', component: UserInfoComponent},
  { path: 'testa', component:TestaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component:PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
