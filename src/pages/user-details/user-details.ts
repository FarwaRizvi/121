import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { GithubUsers } from '../../providers/github-users';
import { UserModel } from '../../models/userModel';

/**
 * Generated class for the UserDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetails {
user: UserModel;
login: string;

  constructor(public navCtrl: NavController, private navParams: NavParams,private githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    githubUsers.loadDetails(this.login).subscribe(user => {
    this.user = user;
    console.log(user)
    //console.log(login)
  })
  }

//  ionViewDidLoad() {
//    console.log('ionViewDidLoad UserDetails');
//  }

}
