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
	if (this.device.isVirtual) {
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://35.196.43.224/infovirtual.html" + this.device.uuid);
	} else {
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://35.196.43.224/app/?uuid=" + this.device.uuid);
	}
  }
	getSafeUrl(url) {
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);		
	}
	
	ionViewCanEnter() {
		console.log ('ionViewCanEnter');
	}
}
