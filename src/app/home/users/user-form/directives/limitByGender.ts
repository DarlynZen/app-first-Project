import { Directive } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: "[limitByGender]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: LimitByGender,
            multi: true
        }
    ],
})

export class LimitByGender implements Validator{

    validate(control: AbstractControl): ValidationErrors | null {
        if (!control) { return null }

        const ctrlGender = control.get('gender');
        const ctrlAge = control.get('age');

        //se valida primero si ambos tienen valores
        if (!ctrlGender || !ctrlGender.value) { return null }
        if (!ctrlAge || !ctrlAge.value) { return null }

        if(ctrlGender.value === 'Masculino' && ctrlAge.value < 40){
            return { limitByGender: 'Los hombres deben ser mayores de 40 años' }
        }

        if (ctrlGender.value === 'Femenino' && ctrlAge.value < 25) {
            return { limitByGender: 'Las mujeres deben ser mayores de 25 años' };
        }

        //si no se cumple ningun caso se regresa nulo
        return null;
    }


}

