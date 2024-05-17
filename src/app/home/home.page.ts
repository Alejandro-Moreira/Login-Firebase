import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController) {}

  async login() {
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      console.log('Logged in:', user);
      this.navCtrl.navigateRoot('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }
}
