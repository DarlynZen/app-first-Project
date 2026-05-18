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
    {name: 'Alice', lastname: 'Smith', email: 'alice@correo.com', age: 30,},
    { name: 'Bob', lastname: 'Johnson', email: 'bob@correo.com', age: 25,},
    { name: 'Charlie', lastname: 'Brown', email: 'charlie@correo.com', age: 35,},
  ]
}
