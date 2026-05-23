import { Directive, Input } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from "@angular/forms";

@Directive({
  selector: '[emailValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidation,
      //NG_VALIDATORS tiene varias clases, con multi: true se le indica que las otras clases no sean sobreescritas. Solo la de emailValidation se va a agregar a la lista de validadores, sin eliminar las otras clases que puedan estar en NG_VALIDATORS
      multi: true
    }
  ],
})

export class EmailValidation implements Validator {
  @Input('emailValidation') options = { fieldName: "Campo" }

  //Este metodo es el que usa Validator
  //validate va a ser referencia a un control, que va a estar asociado a los campos input y select
  //Primero ejecuta el validador y evalua si el valor del control es valido o no, si es valido devuelve null, si no es valido devuelve un objeto con la propiedad email: true
  validate(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //restriccion a cumplir

    //Si el control no tiene valor o no ha cargado por si el html no carga primero, o el valor es vacio, se regresa null
    if (!control || !control.value) {
      return null;
    }

    //Si el valor del control no coincide con el regex, es decir se regresa que el email es invalido o no cumple con la validacion
    if(!emailRegex.test(control.value)) {
      return { emailInvalid: `El campo '${this.options.fieldName}' debe ser un correo electrónico válido` };
    }
    //si regresa null, es decir el email es valido
    return null;
  }
}