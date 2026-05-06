import { Component } from '@angular/core';
import { UserTitle } from "../user-title/user-title";
import { UserDetail } from "../user-detail/user-detail";

@Component({
  selector: 'app-user-list',
  imports: [UserTitle, UserDetail],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  //lista array
  usersActive = [
    {
      name: 'Alice',
      lastname: 'Smith',
      email: 'alice@correo.com',
    },
    {
      name: 'Bob',
      lastname: 'Johnson',
      email: 'bob@correo.com',
    },
    {
      name: 'Charlie',
      lastname: 'Brown',
      email: 'charlie@correo.com',
    },
  ]
  
/*   columns = ['name', 'lastName', 'email'];
 */
  //estructura de columnas
  columns = [
    {property: "name", label: "Nombre de usuario"},
    {property: "lastName", label: "Apellido de usuario"},
    {property: "email", label: "Correo electrónico"},
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
