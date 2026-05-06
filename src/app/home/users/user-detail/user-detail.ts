import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {
  //uso de signo de exclamación para indicar que estas propiedades no tendrá valores nulos
  @Input() name!: string;
  @Input() lastName!: string;
  @Input() email!: string;
}
