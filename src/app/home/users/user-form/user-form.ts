import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IUser, IGender } from '../interfaces/user';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  //El uso de Partial significa que el campo podria o no obtener el id como number, como opcional en el caso de que se este creando un nuevo usuario, no se tendria un id asignado, pero en el caso de que se este editando un usuario existente, si se tendria un id asignado. Esto permite que el componente UserForm sea reutilizable tanto para la creación como para la edición de usuarios, ya que puede manejar ambos casos sin requerir cambios en su lógica interna.
  @Output() onCreate: EventEmitter<IUser & Partial<{ id: number }>> = new EventEmitter();
  @Input() editUser: IUser & {id: number} | null = null;

  //Ubicar NgForm
  @ViewChild('userForm') userForm!: NgForm;

  name = "";
  lastname = "";
  email = "";
  age = 0;
  gender = "Masculino";
  isEditMode = false;
  id: number | undefined;
  
  title = "Create";

  constructor() {
  }

  ngOnChanges(){
    //si editUser es diferente de indefinido
    if(this.editUser) {
      this.name = this.editUser.name;
      this.lastname = this.editUser.lastname;
      this.email = this.editUser.email;
      this.age = this.editUser.age
      this.gender = this.editUser.gender;
      this.isEditMode = true;
      this.id = this.editUser.id;
      this.title = "Edit";

      this.userForm.setValue({
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        age: this.age,
        gender: this.gender
      });
    }
  }

  onSubmit() {
    this.validationRequired(this.name, "Nombre");
    this.validationRequired(this.lastname, "Apellido");
    this.validationRequired(this.email, "Correo");
    this.validationRequired(this.age.toString(), "Edad");
    this.validationRequired(this.gender, "Genero");

    this.validationLength(this.name, 3, "Nombre")
    this.validationLength(this.lastname, 3, "Apellido")
    this.validationEmail(this.email);
    this.validationRangeNumber(this.age, 120, 0, "Edad");

    this.onCreate.emit({
      name:this.name,
      lastname:this.lastname,
      email:this.email,
      age:this.age,
      gender:this.gender as IGender,
      id: this.id, //si id es nulo, se asigna un valor único basado en la fecha actual, de lo contrario se asigna el valor de id existente (en caso de edición)
    });

    this.reset();
  }

  reset(){
    this.name = "";
    this.lastname = "";
    this.email = "";
    this.age = 0;
    this.gender = "Masculino";
    this.isEditMode = false;
    //el undefined no se asigna, pero es una excepcion en este caso para indicar que no hay un id asignado, ya que el id se maneja internamente en el componente Home y no debe ser modificado por el componente UserForm, por lo tanto se asigna undefined para indicar que no hay un id asignado, en lugar de null o un valor numérico específico.
    this.id = undefined;
    this.title = "Create";
  }

  changeUpperCase(value: string): string {
    return value.toUpperCase();
  }

  //Clases reutilizables de validacion
  private validationLength(value: string, minLength: number, fieldName: string) {
    if(value.trim().length < minLength) {
      alert(`${fieldName} debe tener al menos ${minLength} caracteres.`);
      //excepcion de validacion con mensajes por consola
      throw "Validation error";
    }
  }
  private validationEmail(value: string) {
    if(!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("El correo debe tener un formato válido.");
      throw "Validation error";
    }
  }

  private validationRangeNumber(value: number, max: number | null = null, min: number | null, fieldName: string = "Edad") {
    if((min !== null && value < min) || (max !== null && value > max)) {
      if((min !== null && max !== null)) {
        alert(`${fieldName} debe estar entre ${min} y ${max}.`);
        throw "Validation error";
      }else if(min !== null) {
        alert(`${fieldName} debe ser mayor o igual a ${min}.`);
        throw "Validation error";
      }else if(max !== null) {
        alert(`${fieldName} debe ser menor o igual a ${max}.`);
        throw "Validation error";
      }
      alert(`${fieldName} debe estar entre ${min} y ${max}.`);
      throw "Validation error";
    }
  }

  private validationRequired(value: string, fieldName: string) {
    if(!value.trim()) {
      alert(`${fieldName} es un campo requerido.`);
      throw "Validation error";
    }
  }
}

