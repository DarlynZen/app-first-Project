import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

//Definir una interfaz para los mensajes de error
interface IMessageErrors {
  type: string;
  message: string;
}

@Component({
  selector: 'app-error-validations',
  template: `
    @let messages = getMessageErrors();
    @for (message of messages; track message.type) {
      <span class="error">{{ message.message }}</span>
    }
  `,
  styles: `
    span.error {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color: red;
      font-size: 12px;
      margin-top: 5px;
    }
  `,
})

//Para que funcione como control se usara el @Component
export class ErrorValidations {
  @Input() fg!: FormGroup;
  @Input() controlName?: string;
  @Input() title?: string;

  public getMessageErrors(): IMessageErrors[] {

    const messages: IMessageErrors[] = [];

    if (this.controlName && this.title) {

      const control = this.fg.get(this.controlName);
      //si el control no existe o no tiene errores
      if (!control || !control.errors || !control.touched) {
        return [];
      }

      //Obtener las claves de los errores del control, los nombres de las propiedades
      const errors = Object.keys(control.errors);

      //saber de que tipo es cada error
      errors.forEach((error) => {
        switch (error) {
          case 'required':
            messages.push({ type: 'error', message: `El campo '${this.title}' es requerido` });
            break;
          case 'minlength':
            messages.push({
              type: 'error',
              message: `El campo '${this.title}' debe tener al menos ${control.errors ? control?.errors['minlength']?.requiredLength : '0'} caracteres`
            });
            break;
          case 'pattern':
            messages.push({ type: 'error', message: `El campo '${this.title}' no tiene el formato correcto: ${control.errors ? control?.errors['pattern']?.requiredPattern : '0'}` });
            break;
          case 'invalidDomain':
            messages.push({ type: error, message: `${control.errors ? control?.errors['invalidDomain'] : ""}` });
            break;
          case 'min':
            messages.push({ type: error, message: `El campo '${this.title}' debe ser mayor o igual a ${control.errors ? control?.errors['min']?.min : '0'}` });
            break;
          case 'max':
            messages.push({ type: error, message: `El campo '${this.title}' debe ser menor o igual a ${control.errors ? control?.errors['max']?.max : '0'}` });
            break;
        }
      });
    } else {
      
      if (!this.fg || !this.fg.touched) {
        return [];
      }

      const errors = Object.keys(this.fg.errors || {} );

      //saber de que tipo es cada error
      errors.forEach((error) => {
        switch (error) {
          case 'limitByGender':
            messages.push({ type: 'error', message: `${this.fg.errors ? this.fg.errors['limitByGender'] : '0'}` });
            break;
        }
      });
    }
    return messages;
  }
}
