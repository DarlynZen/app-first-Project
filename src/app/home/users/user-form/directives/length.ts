import { Directive, Input } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: "[lengthValidation]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: LengthValidation,
            multi: true
        }
    ],
})

export class LengthValidation implements Validator {

    //Input con opciones para que sea reutilizable
    //el min y el max son opcionales
    @Input('lengthValidation') options: { min?: number, max?: number, fieldName: string } = { min: 0, max: 0, fieldName: "Campo" }

    validate(control: AbstractControl): ValidationErrors | null {
        if (!control || !control.value) {
            return null;
        }

        const valueLength = control.value.length;
        if (this.options.min && valueLength < this.options.min && valueLength > 0) {
            return { lengthInvalid: `El campo '${this.options.fieldName}' debe tener al menos ${this.options.min} caracteres` };
        }

        if (this.options.max && valueLength > this.options.max) {
            return { lengthInvalid: `El campo '${this.options.fieldName}' debe tener como máximo ${this.options.max} caracteres` };
        }

        return null;
    }
}

