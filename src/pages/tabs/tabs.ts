import { LeaderBoardPage } from './../leader-board/leader-board';
import { AboutUsPage } from './../about-us/about-us';
import { HomePage } from './../home/home';
import { ListViewPage } from './../list-view/list-view';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  home = HomePage;
  list = ListViewPage;
  leaderboard = LeaderBoardPage;
  about = AboutUsPage;
  //aggiungere altre root
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
