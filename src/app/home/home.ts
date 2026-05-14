import { Component } from '@angular/core';
import { UserList } from "./users/user-list/user-list";
import { UserForm } from "./users/user-form/user-form";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [UserList, UserForm],
})
export class Home {
  
}
