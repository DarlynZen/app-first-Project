import { Component,input,Input, Signal } from '@angular/core';
import { FieldState } from '@angular/forms/signals';

@Component({
  selector: 'cdev-lib-error-validations',
  imports: [],
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
export class ErrorValidations {
  //signal
  fs = input<FieldState<any, string | number>>();

  public getMessageErrors(): string[] {
    //se hace una sola llamada para tener el valor del signal
    const fieldState = this.fs();
    //si el campo no ha sido tocado o es valido, no se muestran mensajes de error
    if (!fieldState?.touched() || fieldState?.valid()) { return [] }

    const messages: string[] = [];
    const errors = fieldState?.errors();

    errors?.forEach(error => {
      messages.push(error?.message || "Error desconocido");
    })
    return messages;
  }
}
