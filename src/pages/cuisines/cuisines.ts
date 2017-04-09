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
   cuisinesName: "hi",
   id: 4
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,private cuisinesData: CuisinesService)
  {
      cuisinesData.load<Cuisines>('cuisines/listAll','cuisines').subscribe(cuisines => {
      console.log('cuisines comp');
      console.log(cuisines);
      this.cuisines = cuisines;
      this.addCuisine(cuisinesData,'cuisines');
      this.editCuisine(cuisinesData,'cuisines');
      console.log(this.cuisines);
      //this.originalUsers = users;
    })
  }

  addCuisine(cuisinesService: CuisinesService,path: String){
      cuisinesService.add(this.cuisinesBody,path).subscribe();
  }
  editCuisine(cuisinesService: CuisinesService,path: String ){

    //this.cuisinesBody.cuisinesName = "cuisine from angular 2";
    cuisinesService.update(this.cuisinesBody,path).subscribe();
  }


}
