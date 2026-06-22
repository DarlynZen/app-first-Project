import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
//import { IAuth } from '../../../interfaces/auth';
import { IAuth } from '../../../domain/auth.type';
import { form, FormField, pattern, required, requiredError, validate } from '@angular/forms/signals';
import { ErrorValidations } from 'lib';
import { Auth } from '../../../domain';

@Component({
  standalone: true,
  selector: 'cdev-login',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormField,
    ErrorValidations
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  user : IAuth = {
    email: '',
    password: ''
  }

  //modelo
  userModel = signal<IAuth>(this.user);

  //form-signal usa modelo y aplica esquema de validaciones
  userForm = form(this.userModel, schema => {
    required(schema.email, { message: "El correo es requerido" });
    pattern(schema.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "El correo electrónico no es válido" });
    required(schema.password, { message: "La contraseña es requerida" });
    pattern(schema.password, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, { message: "La contraseña debe tener al menos 8 caracteres y contener letra y número" });
  })

  login(){
    console.log(this.userForm().invalid());
  }


/*   initialValues: IAuth = {
    email: '',
    password: '',
  }

  //modelo
  private authModel = signal<IAuth>(this.initialValues);

  //form-signal usa modelo y aplica esquema de validaciones
  authForm = form(this.authModel, schema => {
    required(schema.email, { message: "El correo es requerido" });
    validate(schema.email, ctx => {
      //Solo validar si el campo tiene valor
      if (!ctx.value()) return null;
      //retornamos null si el correo es valido, de lo contrario retornamos un error con un mensaje personalizado
      return ctx.value().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? null : requiredError({ message: "El correo electrónico no es válido" });
    });
    required(schema.password, { message: "La contraseña es requerida" });
    validate(schema.password, ctx => {
      //Solo validar si el campo tiene valor
      if (!ctx.value()) return null;

      //la contraseña debe tener al menos 6 caracteres y al menos una letra mayúscula
      const pattern = /^(?=.*[A-Z]).{6,}$/;
      return pattern.test(ctx.value()) ? null : requiredError({ message: "La contraseña debe tener al menos 6 caracteres y una letra mayúscula" });
    });
  });

  save() {
    if (this.authForm().valid()) {
      console.log(this.authModel());
    }
  } */
}
