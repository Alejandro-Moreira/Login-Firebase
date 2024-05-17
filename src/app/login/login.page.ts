import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController) {}

  async login() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      console.log('Crea un usuario:', userCredential.user);
      this.navCtrl.navigateRoot('/dashboard');
    } catch (error) {
      console.error('Error en iniciar:', error);
     
    }
  }

  goBack() {

    this.navCtrl.navigateRoot('/home');  
  }
}
