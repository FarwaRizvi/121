import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home-page.html'
})
export class HomePagePage {
  username = '';
  email = '';
  constructor(private nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info.name;
    this.email = info.email;
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
        this.nav.setRoot(LoginPage)
    });
  }
}
