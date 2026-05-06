import { Component } from '@angular/core';
import { UserList } from "./users/user-list/user-list";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [UserList],
})
export class Home {
  
}
