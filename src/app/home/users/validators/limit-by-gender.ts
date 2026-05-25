import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

//Este validador no es un tipo validatorFn, sino actua como si fuera un validatorFn
export const validateLimitByGender = (control: AbstractControl): ValidationErrors | null => {
    if(!control) { return null }

    const ctrlGender = control.get('gender');
    const ctrlAge = control.get('age');

    //se valida primero si ambos tienen valores
    if (!ctrlGender || !ctrlAge) { return null }

    const gender = ctrlGender.value;
    const age = ctrlAge.value;

    if(gender === 'Masculino' && age < 40){
        return { limitByGender: 'Los hombres deben ser mayores de 40 años' }
    }

    if (gender === 'Femenino' && age < 25) {
        return { limitByGender: 'Las mujeres deben ser mayores de 25 años' };
    }

    //si no se cumple ningun caso se regresa nulo
    return null;
}