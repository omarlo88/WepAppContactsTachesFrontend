import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TachesComponent } from './taches/taches.component';
import { NewTacheComponent } from './new-tache/new-tache.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { UsersComponent } from './users/users.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { DetailContactComponent } from './detail-contact/detail-contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from '../services/authentication.service';
import { TachesService } from '../services/taches.service';
import { EditTacheComponent } from './edit-tache/edit-tache.component';
import { DetailTacheComponent } from './detail-tache/detail-tache.component';
import { GaleryService } from '../services/galery.service';
import { UsersService } from '../services/users.service';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TachesComponent,
    NewTacheComponent,
    ContactsComponent,
    NewContactComponent,
    UsersComponent,
    DetailUserComponent,
    DetailContactComponent,
    PageNotFoundComponent,
    GalleryComponent,
    HomeComponent,
    EditTacheComponent,
    DetailTacheComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [AuthenticationService, TachesService, GaleryService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
