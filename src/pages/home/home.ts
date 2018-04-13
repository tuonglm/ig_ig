import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   id_devices : any;
  constructor(public navCtrl: NavController, private device: Device) {
	this.id_devices = this.device.uuid;
  }

}
