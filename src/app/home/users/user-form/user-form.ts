import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { IUser } from '../interfaces/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateEmailDomain } from '../validators/email';
import { validateLimitByGender } from '../validators/limit-by-gender';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-user-form',
  imports: [],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  //El uso de Partial significa que el campo podria o no obtener el id como number, como opcional en el caso de que se este creando un nuevo usuario, no se tendria un id asignado, pero en el caso de que se este editando un usuario existente, si se tendria un id asignado. Esto permite que el componente UserForm sea reutilizable tanto para la creación como para la edición de usuarios, ya que puede manejar ambos casos sin requerir cambios en su lógica interna.
  @Output() onCreate: EventEmitter < IUser > = new EventEmitter();
  @Input() editUser: IUser | null = null;

  private originalUser : IUser = {
    name: "",
    lastname: "",
    email: "",
    age: 0,
    gender: "Masculino",
    id: -1
  }

  //al usar un form-signal se debe de usar un modelo
  private userModel = signal<IUser>(this.originalUser);

  public userForm = form(this.userModel, {});

  isEditMode = false;
  id: number | undefined;
  title = "Create";

  //Definimos un array de dominios de correo electrónico válidos para la validación del campo
  domains = ["company.com", "pe.company.com", "org.company.com"];

  constructor() {
    this.createForm();
  }

  private createForm(){
    this.fg = new FormGroup({
      //Definimos los FormControl para cada campo del formulario, esto nos permite tener un control total sobre cada campo individualmente, incluyendo su valor, estado y validaciones. Al usar FormControl, podemos aplicar validaciones específicas a cada campo y gestionar su estado de manera independiente dentro del FormGroup.
      //FormControl tiene argumentos. El primero es el valor inicial del campo, el segundo es un array de validadores sincronos y el tercero es un array de validadores asincronos.
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(/^[^s@]+@[^\s@]+\.[^\s@]+$/), validateEmailDomain(this.domains)]),
      age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(120)]),
      gender: new FormControl(null, [Validators.required])
    },
    { validators: [validateLimitByGender] });
  }

  public onSubmit(){
    //console.log(this.fg);
  }

  public reset(){
    //this.fg.reset();
  } 
}

