import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IAuth } from '../../../domain/auth.type';
import { email, form, FormField, pattern, required, requiredError, validate } from '@angular/forms/signals';
import { ErrorValidations } from 'lib';
import { AuthApplication } from '../../../application/auth';
import { Auth } from '../../../domain';
import { AuthAdapter } from '../../../adapters/auth.adapters';

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
  providers: [AuthApplication,
              //Inyectamos el adaptador para que pueda ser usado por la clase AuthApplication 
              { provide: "IAuthPort", useClass: AuthAdapter }
            ]
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

  //Inyectamos la clase AuthApplication para poder usarla en el método login
  //constructor(private authApplication: AuthApplication) {}
  private authApplication: AuthApplication = inject(AuthApplication);

  async login(){
    const {email, password} = this.userForm().value();
    const auth: Auth = new Auth({email, password});
    
    const response = await this.authApplication.login(auth);
    console.log(response);
  }
}
