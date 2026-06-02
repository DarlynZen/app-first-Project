import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldState } from '@angular/forms/signals';

@Component({
  selector: 'app-error-validations',
  template: `
    @let messages = getMessageErrors();
    @for (message of messages; track message) {
      <span class="error">{{ message }}</span>
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
  @Input() fs!: FieldState<any, string | number>;

  public getMessageErrors(): string[] {

    //si el campo no ha sido tocado o es valido, no se muestran mensajes de error
    if (!this.fs.touched() || this.fs.valid()) { return [] }

    const messages: string[] = [];
    const errors = this.fs.errorSummary();

    errors.forEach(error => {
      messages.push(error?.message || "Error desconocido");
    })
    return messages;
  }
}
