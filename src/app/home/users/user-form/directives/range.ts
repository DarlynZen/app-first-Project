import { Directive, Input } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: "[rangeValidation]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: RangeValidation,
            multi: true
        }
    ],
})

export class RangeValidation implements Validator {

    //Input con opciones para que sea reutilizable
    //el min y el max son opcionales
    @Input('rangeValidation') options: { min?: number, max?: number, fieldName: string } = { min: 0, max: 0, fieldName: "Campo" }

    validate(control: AbstractControl): ValidationErrors | null {
        if (!control || control.value === null || control.value === undefined) {
            return null;
        }

        //como el valor del control es un string, se convierte a numero con el operador + para poder comparar con min y max
        const value = +control.value;

        if (this.options.min && value < this.options.min) {
            return { rangeInvalid: `El campo '${this.options.fieldName}' debe ser al menos ${this.options.min}` };
        }

        if (this.options.max && value > this.options.max) {
            return { rangeInvalid: `El campo '${this.options.fieldName}' debe ser como máximo ${this.options.max}` };
        }

        return null;
    }
}