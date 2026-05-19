import { Component, Input } from '@angular/core';
import { IUser } from '../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {
  //uso de signo de exclamación para indicar que estas propiedades no tendrá valores nulos
  /* @Input() name!: string;
  @Input() lastName!: string;
  @Input() email!: string;
  @Input() age!: number;
  @Input() gender!: string; */

  //Lo anterior es lo mismo que decir esto
  @Input() user!: IUser;

  ngOnChange(){
    console.log('UserDetail - ngOnChange', this.user);
  }
}
