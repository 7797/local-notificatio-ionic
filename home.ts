import { Component } from '@angular/core';
import { NavController,AlertController,Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  localnotifications: any;
    
     notifications: any[] = [];
     NTime:any;
  constructor(public navCtrl: NavController,
  public platform:Platform,
public alertCtrl:AlertController,
public localNotifications:LocalNotifications) {
   // this.NTime = moment(new Date()).format();
  this.NTime = new Date().getTime();
  }
   ionViewDidLoad(){

   }
   addNotifications(NTime){
  
  
     console.log("time for notification",this.NTime);
      let notification = {
       id:1,
       title:'hey!',
       text:'you just got notified',
       at:NTime,
     };
    this.notifications.push(notification);
     console.log("Notifications to be schedule:",this.notifications);
   
     if(this.platform.is('cordova')){
     this.localNotifications.clearAll().then(() => {
     
      this.localNotifications.schedule(this.notifications);
           
      let alert = this.alertCtrl.create({
        title: 'Notifications set',
        buttons: ['Ok']
    });

    alert.present();

    });
        }      // this.notifications.push(notification);

   }
   cancelAll(){
    this.localNotifications.clearAll();
 
    let alert = this.alertCtrl.create({
       title: 'Notifications cancelled',
        buttons: ['Ok']
    });
 
    alert.present();
  }
}
