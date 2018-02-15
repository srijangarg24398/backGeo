import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  	config: BackgroundGeolocationConfig = {
	    desiredAccuracy: 10,
	    stationaryRadius: 20,
	    distanceFilter: 30,
	    debug: true,
	    stopOnTerminate: false
	};
	location:BackgroundGeolocationResponse;
  constructor(public navCtrl: NavController,private backgroundGeolocation: BackgroundGeolocation) {
  	this.backgroundGeolocation.configure(this.config)
  	.subscribe((location: BackgroundGeolocationResponse) => {
    	console.log(location);
    	this.location=location;
    	this.backgroundGeolocation.finish();
	});
	this.backgroundGeolocation.start();
  }

}
