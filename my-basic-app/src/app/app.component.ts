import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Pablo';
  username = '';
  showPassword = false;
  displayCounter = 0;
  displayHistory = [];

  resetUsername() {
    this.username = '';
  }

  onDisplayDetails() {
    this.displayCounter++;
    this.showPassword = !this.showPassword;
    this.log(this.displayCounter);
  }

  log(value: number) {
    this.displayHistory = [...this.displayHistory, value];
  }
}
