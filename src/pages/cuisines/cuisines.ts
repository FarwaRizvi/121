import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Cuisines } from '../../models/cuisines';
import {  CuisinesService } from '../../providers/cuisines-service';


/*
  Generated class for the Cuisines page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cuisines',
  templateUrl: 'cuisines.html'
})
export class CuisinesPage {
  cuisines: Cuisines[];
  cuisinesBody: Cuisines = {
   cuisinesName: "from ang 2",
   id: 4
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,private cuisinesData: CuisinesService)
  {
    cuisinesData.load().subscribe(cuisines => {
      console.log('cuisines comp');
      console.log(cuisines);
      this.cuisines = cuisines;
      this.addCuisine(cuisinesData);
      this.editCuisine(cuisinesData);
      console.log(this.cuisines);
      //this.originalUsers = users;
    })
  }

  addCuisine(cuisinesService: CuisinesService){
      cuisinesService.add(this.cuisinesBody).subscribe();
  }
  editCuisine(cuisinesService: CuisinesService){

    //this.cuisinesBody.cuisinesName = "cuisine from angular 2";
    cuisinesService.update(this.cuisinesBody).subscribe();
  }


}
