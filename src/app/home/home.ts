import { Component, OnInit } from '@angular/core';
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

  //inicialmente va a ser un nulo porque no hay ningun usuario seleccionado para editar, pero cuando se seleccione un usuario para editar, se va a asignar ese usuario a esta variable
  //el userSelected será de tipoIUser y ademas tendrá la propiedad de id
  userSelected: IUser & {id: number} | null = null;

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
    this.userSelected = 
    {...user, 
     id: this.usersActive.includes(user) ? this.usersActive.indexOf(user) : -1, //si el usuario existe en la lista, se asigna su índice como id, de lo contrario se asigna -1 para indicar que no es un usuario existente
    }
  }

  create(user: IUser & Partial<{id: number}>) {
    //si el id es diferente de indefinido y nulo, entonces se esta editando
    if(user.id !== undefined && user.id !== null) {
      const index = this.usersActive[user.id] ? user.id : -1; //si el id existe en la lista, se asigna su índice, de lo contrario se asigna -1 para indicar que no es un usuario existente
      
      if(index == -1) {
        alert("No existe el usuario a editar");
        return;
      }

      //se actualiza el usuario existente en la lista con los nuevos datos proporcionados
      //Omit se utiliza para crear un nuevo tipo que excluye la propiedad 'id' del tipo original, lo que significa que el objeto user no debe incluir la propiedad 'id' al ser emitido, ya que el id se maneja internamente en el componente Home y no debe ser modificado por el componente UserForm.
      this.usersActive[index] = user as Omit<IUser & Partial<{id: number}>, 'id'>;
      return;
    }

    //si el id es indefinido o nulo, entonces se esta creando un nuevo usuario, por lo tanto se agrega a la lista de usuarios activos
    //la linea reasigna el arreglo de usersActive con un arreglo nuevo, donde se agrego un user de tipo IUser al final del arreglo
    this.usersActive = [...this.usersActive, user as IUser];
  }
}