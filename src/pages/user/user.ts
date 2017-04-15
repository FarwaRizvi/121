import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubUsers } from '../../providers/github-users';
import { UserModel } from '../../models/userModel';
import { UserDetails } from '../user-details/user-details';



/**
 * Generated class for the User page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class User {
users: UserModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
  githubUsers.load().subscribe(users => {
    console.log(users);
    this.users = users;
  })
  }

  goToDetails(login: string){
        this.navCtrl.push( UserDetails , {login});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad User');
  }

}
