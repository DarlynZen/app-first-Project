import { AbstractControl, ValidatorFn } from "@angular/forms";

//Validador como función
//Definimos una función para validar el dominio del correo electrónico, esta función se utiliza para asegurarse de que el correo electrónico ingresado por el usuario pertenece a uno de los dominios permitidos. La función devuelve un ValidatorFn, que es una función que toma un FormControl como argumento y devuelve un objeto de error si la validación falla o null si la validación es exitosa. En este caso, la función verifica si el dominio del correo electrónico ingresado coincide con alguno de los dominios definidos en el array "domains". Si el dominio no es válido, se devuelve un objeto de error con la clave "invalidDomain" y un mensaje descriptivo.
export const validateEmailDomain = (domains: string[]): ValidatorFn => {
    //retornar una función que tome un  como argumento basado en AbstractControl, que es la clase base para FormControl, FormGroup y FormArray en Angular. Esta función se utilizará como un validador personalizado para el campo de correo electrónico en el formulario reactivo. 
    return (control: AbstractControl) => {
        if (!control || !control.value) { return null };

        const email: string = control.value;
        const domain = email.substring(email.lastIndexOf("@") + 1);
        if (!domains.includes(domain)) {
            return { invalidDomain: `El dominio del correo electrónico debe ser uno de los siguientes: ${domains.join(", ")}` }
        }

        return null;
    }
}

/* //Validador como clase estática, se puede usar cualquiera de los dos
export class CustomValidators {
    static validateEmailDomain(domains: string[]): ValidatorFn {
        return (control: AbstractControl) => {
            if (!control || !control.value) { return null };

            const email: string = control.value;
            const domain = email.substring(email.lastIndexOf("@") + 1);
            if (!domains.includes(domain)) {
                return { invalidDomain: `El dominio del correo electrónico debe ser uno de los siguientes: ${domains.join(", ")}` }
            }

            return null;
        }
    }
} */