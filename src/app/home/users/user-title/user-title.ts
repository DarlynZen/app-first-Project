import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-title',
  imports: [],
  templateUrl: './user-title.html',
  styleUrl: './user-title.css',
})
export class UserTitle {
    //propiedades públicas
  /* titleName = 'Nombre'.toUpperCase();
  titleLastName = 'Apellido'.toUpperCase();
  titleEmail = 'Correo electrónico'.toUpperCase(); */

  //arrego basico, no abusar del any
  @Input() columns: any[] = [];

}
