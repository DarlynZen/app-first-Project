import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {
  //uso de signo de exclamación para indicar que estas propiedades no tendrá valores nulos
  @Input() user!: IUser;
  @Input() index!: number;
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onEdit: EventEmitter<IUser> = new EventEmitter();

  delete($event: Event){
    //evitar que se ejecute el evento click de editar del contenedor padre (div.info) al seleccionar una fila
    $event.stopPropagation();
    this.onDelete.emit(this.index);
  }

  edit(){
    this.onEdit.emit(this.user);
  }
}
 