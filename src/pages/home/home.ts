import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   id_devices : any;
   url: any;
  constructor(public navCtrl: NavController, private device: Device, public sanitizer: DomSanitizer) {
	//this.id_devices = this.device.uuid;
	this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://ios.taris.vn/apptest?abc=" + this.device.uuid);	
	console.log (this.device);	
	//this.getSafeUrl("http://ios.taris.vn/apptest?abc=" + this.id_devices);
  }
	getSafeUrl(url) {
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);		
	}
	
	ionViewCanEnter() {
		console.log ('ionViewCanEnter');
	}
}
