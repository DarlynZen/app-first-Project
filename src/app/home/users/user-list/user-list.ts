import { Component, Input } from '@angular/core';
import { UserTitle } from "../user-title/user-title";
import { UserDetail } from "../user-detail/user-detail";
import { IColumn } from '../interfaces/column';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  imports: [UserTitle, UserDetail],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  //users dentro de input es un alias, para no cambiar otros nombres
  @Input("users") usersActive: IUser[] = [];

/*   columns = ['name', 'lastName', 'email'];
 */
  //estructura de columnas
  //uso de arreglo IColumn para definir las columnas de la tabla, cada objeto del arreglo representa una columna con su propiedad y etiqueta correspondiente
  columns : IColumn[] = [
    //objetos de tipo json
    {property: "name", label: "Nombre"},
    {property: "lastName", label: "Apellido"},
    {property: "email", label: "Correo"},
    {property: "age", label:"Edad (años)"},
  ]
  
  //el valor de columns se obtiene a partir de las claves del primer objeto del array usersActive
/*   columns = Object.keys(this.usersActive[0]);
 */

  /* for (let index = 0; index < array.length; index++) {
        const element = array[index];
    }

    for (const user of usersActive) {
        console.log(user.name);
    }

    usersActive.forEach(user => { console.log(user.name)})
 */

}
