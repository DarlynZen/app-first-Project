import { Component, input, Input, Signal } from '@angular/core';
import { FieldState } from '@angular/forms/signals';

@Component({
  standalone: true,
  selector: 'mat-error[cdev-lib-error-validations]',
  template: `
    {{  getMessageError() }}
  `,
})
export class ErrorValidations {
  //@Input() fs!: FieldState<any, string | number>;
  @Input() fs!: any;

  public getMessageError(): string {
    if (!this.fs.touched() || this.fs.valid()) return '';
    
    const firstError = this.fs.errors()[0];
    return firstError?.message || "Error desconocido";
  }
}
