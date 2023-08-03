import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CreateLibraryuserComponent } from './create-libraryuser/create-libraryuser.component';
import { CreatebookissueComponent } from './createbookissue/createbookissue.component';
import { CreatebookreturnComponent } from './createbookreturn/createbookreturn.component';
import { HomeComponent } from './home/home.component';
import { LibraryuserListComponent } from './libraryuser-list/libraryuser-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserComponent } from './user/user.component';
import { UserrecordComponent } from './userrecord/userrecord.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CreateBookComponent,
    CreateLibraryuserComponent,
    CreatebookissueComponent,
    CreatebookreturnComponent,
    HomeComponent,
    LibraryuserListComponent,
    LoginComponent,
    RegisterComponent,
    SearchbookComponent,
    SearchuserComponent,
    UpdateBookComponent,
    UpdateuserComponent,
    UserComponent,
    UserrecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
