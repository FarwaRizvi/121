import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePagePage } from '../pages/home-page/home-page';
import { CuisinesPage } from '../pages/cuisines/cuisines';

import { GithubUsers } from '../providers/github-users';
import { AuthService } from '../providers/auth-service';
import { CuisinesService } from '../providers/cuisines-service';



@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
	UsersPage,
    ReposPage,
	UserDetailsPage,
    OrganisationsPage,
    LoginPage,
    HomePagePage,
    RegisterPage,
    CuisinesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
	UsersPage,
    ReposPage,
	UserDetailsPage,
    OrganisationsPage,
    LoginPage,
    HomePagePage,
    RegisterPage,
    CuisinesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	GithubUsers,
  AuthService,
  CuisinesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
