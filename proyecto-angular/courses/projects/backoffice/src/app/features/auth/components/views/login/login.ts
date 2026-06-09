import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IAuth } from '../../../interfaces/auth';
import { form, FormField, required, requiredError, validate } from '@angular/forms/signals';

@Component({
  selector: 'cdev-login',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormField,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  initialValues: IAuth = {
    email: '',
    password: '',
  }

  //modelo
  private authModel = signal<IAuth>(this.initialValues);

  //form-signal usa modelo y aplica esquema de validaciones
  authForm = form(this.authModel, schema => {
    required(schema.email, { message: "El correo es requerido" });
    validate(schema.email, ctx => {
      //retornamos null si el correo es valido, de lo contrario retornamos un error con un mensaje personalizado
      return ctx.value().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? null : requiredError({ message: "El correo electrónico no es válido" });
    });
    required(schema.password, { message: "La contraseña es requerida" });
    validate(schema.password, ctx => {
      //la contraseña debe tener al menos 6 caracteres y al menos una letra mayúscula
      const pattern = /^(?=.*[A-Z]).{6,}$/;
      return pattern.test(ctx.value()) ? null : requiredError({ message: "La contraseña debe tener al menos 6 caracteres y una letra mayúscula" });
    });
  });

  save(){
    if(this.authForm().valid()){
      console.log(this.authModel());
    }
  }
}
