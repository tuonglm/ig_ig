import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   id_devices : any;
   url: any;
  constructor(public navCtrl: NavController, public sanitizer: DomSanitizer) {
	this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://35.196.43.224/app-android/");
  }
	getSafeUrl(url) {
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);		
	}
	
}
