import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IUser, IGender } from '../interfaces/user';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { validateEmailDomain } from '../validators/email';
import { validateLimitByGender } from '../validators/limit-by-gender';
import { ErrorValidations } from '../messages/error';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, ErrorValidations],
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

  //Definimos el FormGroup para manejar el formulario reactivo, esto nos permite tener un control total sobre los campos del formulario, sus validaciones y su estado. Al usar FormGroup, podemos agrupar varios FormControl juntos, lo que facilita la gestión de formularios complejos y la aplicación de validaciones personalizadas.
  fg!: FormGroup;

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
    console.log(this.fg);
  }

  public reset(){
    this.fg.reset();
  }

  //Esta función recibe un FormGroup y el nombre del control, y devuelve un array de mensajes de error para ese control.
  public showErrors(fg: FormGroup, controlName: string, title: string): string[]{
    return errorsVariations(fg, controlName, title);
  }

 
}

