import { Component } from '@angular/core';
import { UserList } from "./users/user-list/user-list";
import { UserForm } from "./users/user-form/user-form";
import { IUser } from './users/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [UserList, UserForm],
})
export class Home {
    //lista array
  usersActive: IUser[] = [
    {name: 'Alice', lastname: 'Smith', email: 'alice@correo.com', age: 30, gender: "Femenino"},
    { name: 'Bob', lastname: 'Johnson', email: 'bob@correo.com', age: 25, gender: "Masculino"},
    { name: 'Charlie', lastname: 'Brown', email: 'charlie@correo.com', age: 35, gender: "Masculino"},
  ]

  //inicialmente va a ser u nuclo porque no hay ningun usuario seleccionado para editar, pero cuando se seleccione un usuario para editar, se va a asignar ese usuario a esta variable
  userSelected: IUser | null = null;

  delete(index: number) {
    const existsinUser = this.usersActive[index];
    
    //return para evitar que se ejecute el código siguiente si no existe el usuario a eliminar
    if(!existsinUser) {
      alert("No existe el usuario a eliminar");
      return;
    }   
    
    if(confirm(`¿Estás seguro de eliminar este usuario?: ${existsinUser.name} ${existsinUser.lastname}`)) {
      this.usersActive.splice(index, 1);
    }
  }

  edit(user: IUser) {
    console.log("Usuario a editar:", user);
    this.userSelected = user;
  }
}
