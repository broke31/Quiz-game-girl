import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SpecificInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-specific-info',
  templateUrl: 'specific-info.html',
})
export class SpecificInfoPage {
  girl:any;
  infoText:string
  nameGirl:string
  photo:string
  toSend = {
    username:""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.girl = this.navParams.get("Girl")
    this.nameGirl = this.girl.name;
    this.infoText = this.girl.info;
    this.photo = this.girl.src;
    this.toSend.username = this.navParams.get("Username");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecificInfoPage');
  }
  goToHome(){

    this.navCtrl.push(HomePage,this.toSend);
  }

}
