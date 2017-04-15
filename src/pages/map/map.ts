import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { Cuisines } from '../models/cuisines';
import { Items } from '../../models/items';
import {  CuisinesService } from '../../providers/cuisines-service';

/**
 * Generated class for the Map page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class Map {
  items: Items[];
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  loadLat: number;
  loadLong: number;


  constructor(public navCtrl: NavController, private list: CuisinesService, public navParams: NavParams)
  {
   this.loadLat = -34.9290;
   this.loadLong = 138.6010;
    list.load("items/front/listall","list").subscribe(items=> {
      console.log(items)
    })
  }

  ionViewDidLoad() {
    this.loadMap(this.loadLat,this.loadLong);
  }


  loadMap(loadLat,loadLong)
  {
      let latLng = new google.maps.LatLng(loadLat,loadLong);

      let mapOptions =
      {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  addMarker() //(lat: number, lng: number): void
  {

      let pos = new google.maps.LatLng(-34.9290, 138.6010);
      //let pos = new google.maps.LatLng(lat, lng);

      let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: pos
      });

      let content = "<h4>Information!</h4>";

      this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, content)
  {
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });

      google.maps.event.addListener(marker, 'rightclick', function() {
        this.setMap(null);
      });
  }
}
