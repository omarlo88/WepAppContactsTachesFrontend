import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TachesComponent } from '../taches/taches.component';
import { NewTacheComponent } from '../new-tache/new-tache.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { NewContactComponent } from '../new-contact/new-contact.component';
import { RegisterComponent } from '../register/register.component';
import { UsersComponent } from '../users/users.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { DetailContactComponent } from '../detail-contact/detail-contact.component';
import { DetailUserComponent } from '../detail-user/detail-user.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { HomeComponent } from '../home/home.component';
import { EditTacheComponent } from '../edit-tache/edit-tache.component';
import { DetailTacheComponent } from '../detail-tache/detail-tache.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

const routes: Routes = [
  {path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "taches", component: TachesComponent},
  {path: "new-tache", component: NewTacheComponent},
  {path: "contacts", component: ContactsComponent},
  {path: "new-contact", component: NewContactComponent},
  {path: "register", component: RegisterComponent},
  {path: "users", component: UsersComponent},
  {path: "galeries", component: GalleryComponent},
  {path: "detail-contact/:id", component: DetailContactComponent},
  {path: "detail-user/:id", component: DetailUserComponent},
  {path: "edit-user/:id", component: EditUserComponent},
  {path: "edit-tache/:id", component: EditTacheComponent},
  {path: "detail-tache/:id", component: DetailTacheComponent},
  {path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes, { enableTracing: true })
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
