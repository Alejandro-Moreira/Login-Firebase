import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController) { }

  ngOnInit() {
    
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      console.log('Logged out successfully');
      this.navCtrl.navigateRoot('/login'); 
    } catch (error) {
      console.error('Error logging out', error);
    }
  }

}
