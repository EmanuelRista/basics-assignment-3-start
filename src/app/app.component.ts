import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  secretPassword = 'tuna';
  passwordIsVisible = true;
  log = [];

  getSecretPassword() {
    return this.secretPassword;
  }

  togglePassword() {
    this.passwordIsVisible = !this.passwordIsVisible;
    this.log.push(this.log.length + 1);
  }

  getButtonName() {
    if(this.passwordIsVisible) {
      return 'Hide details';
    } else {
      return 'Display details';
    }
  }

}
