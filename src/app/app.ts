import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  operator1 = signal(30);
  operator2 = signal(20);

  sum = this.operator1() + this.operator2();
}
