import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { IUser } from '../interfaces/user';
import { form, max, min, minLength, required, requiredError, validate, FormField } from '@angular/forms/signals';


@Component({
  selector: 'app-user-form',
  imports: [FormField],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  //El uso de Partial significa que el campo podria o no obtener el id como number, como opcional en el caso de que se este creando un nuevo usuario, no se tendria un id asignado, pero en el caso de que se este editando un usuario existente, si se tendria un id asignado. Esto permite que el componente UserForm sea reutilizable tanto para la creación como para la edición de usuarios, ya que puede manejar ambos casos sin requerir cambios en su lógica interna.
  @Output() onCreate: EventEmitter<IUser> = new EventEmitter();
  @Input() editUser: IUser | null = null;

  //Definimos un array de dominios de correo electrónico válidos para la validación del campo
  domains = ["company.com", "pe.company.com", "org.company.com"];

  private originalUser: IUser = {
    name: "",
    lastname: "",
    email: "",
    age: 0,
    gender: "Masculino",
    id: -1
  }

  //al usar un form-signal se debe de usar un modelo
  private userModel = signal<IUser>(this.originalUser);

  public userForm = form(this.userModel, schema => {
    required(schema.name, { message: "El nombre es requerido" });
    minLength(schema.name, 3, { message: "El nombre debe tener al menos 3 caracteres" });
    required(schema.lastname, { message: "El apellido es requerido" });
    required(schema.email, { message: "El correo electrónico es requerido" });
    validate(schema.email, ctx => {
      //retornamos null si el correo es valido, de lo contrario retornamos un error con un mensaje personalizado
      return ctx.value().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? null : requiredError({ message: "El correo electrónico no es válido" });
    });
    validate(schema.email, ctx => {
      //Obtenemos el dominio del correo electrónico ingresado por el usuario, esto se hace utilizando el método substring para extraer la parte del correo electrónico que viene después del símbolo "@".
      //obtener campos
      const email: string = ctx.value();
      const domain = email.substring(email.lastIndexOf("@") + 1);
      const domains = this.domains;
      return domains.includes(domain) ? null : requiredError({ message: `El dominio del correo electrónico debe ser uno de los siguientes: ${domains.join(", ")}` });
    });
    required(schema.age, { message: "La edad es requerida" });
    min(schema.age, 18, { message: "La edad debe ser mayor o igual a 18" });
    max(schema.age, 120, { message: "La edad debe ser menor o igual a 120" });
    required(schema.gender, { message: "El género es requerido" });
    validate(schema, ctx => {
      if (!ctx) { return null }
      const ctrlAge = ctx.fieldTree.age;
      const ctrlGender = ctx.fieldTree.gender;

      if (!ctrlGender || !ctrlAge) { return null }

      const gender = ctrlGender().value();
      const age = ctrlAge().value();

      if (gender === 'Masculino' && age < 40) { return requiredError
        ({ message: 'Los hombres deben ser mayores de 40 años' });
      }

      if (gender === 'Femenino' && age < 25) { return requiredError
        ({ message: 'Las mujeres deben ser mayores de 25 años' });
      }

      //si no se cumple ningun caso se regresa nulo
      return null;

    });
  });

  isEditMode = false;
  id: number | undefined;
  title = "Create";

  public onSubmit(){
    //con parentesis en el form y en la propiedad porque es un signal, si no se ponen los parentesis se estaria haciendo referencia a la función del signal y no al valor que retorna la función del signal 
    //console.log(this.userForm().value());
    //console.log(this.userForm().valid());
    console.log(this.userForm().errors());
    console.log(this.userForm().errorSummary());
  }

  public reset(){

  }

}

