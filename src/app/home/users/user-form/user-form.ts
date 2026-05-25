import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IUser, IGender } from '../interfaces/user';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailValidation } from "./directives/email";
import { LengthValidation } from './directives/length';
import { RangeValidation } from './directives/range';
import { LimitByGender } from './directives/limitByGender';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule, EmailValidation, LengthValidation, RangeValidation, LimitByGender],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  //El uso de Partial significa que el campo podria o no obtener el id como number, como opcional en el caso de que se este creando un nuevo usuario, no se tendria un id asignado, pero en el caso de que se este editando un usuario existente, si se tendria un id asignado. Esto permite que el componente UserForm sea reutilizable tanto para la creación como para la edición de usuarios, ya que puede manejar ambos casos sin requerir cambios en su lógica interna.
  @Output() onCreate: EventEmitter<IUser & Partial<{ id: number }>> = new EventEmitter();
  @Input() editUser: IUser & {id: number} | null = null;

  //Ubicar NgForm
  @ViewChild('userForm') userForm!: NgForm;

  formData =  {
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

  ngOnChanges(){
    //si editUser es diferente de indefinido
    //editUser es una entrada
    if(this.editUser) {

      //esto reemplaza a lo demas
      //editUser es un objeto que contiene los datos del usuario a editar, incluyendo su id, nombre, apellido, correo, edad y género. Al asignar este objeto a userForm.setValue(), se llenan los campos del formulario con los valores correspondientes del usuario seleccionado para edición. Esto permite que el formulario muestre la información actual del usuario, facilitando la tarea de modificarla según sea necesario.
      this.userForm.form.patchValue(this.editUser)
      this.id = this.editUser.id;
      this.isEditMode = true;
      this.title = "Edit";
    }
  }

  onSubmit() {
    if(this.userForm.valid) {
      //Los ... son para crear un nuevo objeto a partir de los valores del formulario, y agregarle el id si es que existe, esto es necesario para que el componente padre pueda identificar si se esta creando un nuevo usuario o editando uno existente, y manejar la lógica correspondiente en cada caso.
      this.onCreate.emit({...this.userForm.value, id: this.id});

      this.reset();
    } else {
      this.userForm.form.markAllAsTouched(); //marcar todos los campos como tocados para mostrar los mensajes de error de validación
    }
  }

  reset(){
    this.userForm.resetForm()
    this.title = "Create";
    this.isEditMode = false;
    this.id = undefined;
  }

  changeUpperCase(value: string): string {
    return value.toUpperCase();
  }
}

