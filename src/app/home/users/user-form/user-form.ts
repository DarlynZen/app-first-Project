import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IUser, IGender } from '../interfaces/user';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailValidation } from "./directives/email";
import { LengthValidation } from './directives/length';
import { RangeValidation } from './directives/range';
import { LimitByGender } from './directives/limitByGender';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, EmailValidation, LengthValidation, RangeValidation, LimitByGender],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  //El uso de Partial significa que el campo podria o no obtener el id como number, como opcional en el caso de que se este creando un nuevo usuario, no se tendria un id asignado, pero en el caso de que se este editando un usuario existente, si se tendria un id asignado. Esto permite que el componente UserForm sea reutilizable tanto para la creación como para la edición de usuarios, ya que puede manejar ambos casos sin requerir cambios en su lógica interna.
  @Output() onCreate: EventEmitter < IUser > = new EventEmitter();
  @Input() editUser: IUser | null = null;

  formData : IUser = {
    name: "",
    lastname: "",
    email: "",
    age: 0,
    gender: "Masculino",
    id: -1
  }

  isEditMode = false;
  id: number | undefined;
  title = "Create";

  constructor() {}

}

