import { FormGroup } from "@angular/forms";

//Una ckase que recibe un FormGroup y el nombre del control, y devuelve un array de mensajes de error para ese control.
export const errorsValidations = (fg: FormGroup, controlName: string, title: string): string[] => {
  //Obtenemos el control del FormGroup usando el nombre del control, si el control no existe, devolvemos un array vacío.
  const control = fg.get(controlName);
  //si el control no existe o no tiene errores
  if (!control || !control.errors || !control.touched ) { return [] }

  //Obtener las claves de los errores del control, los nombres de las propiedades
  const errors = Object.keys(control.errors);
  const messages: string[] = [];

  //saber de que tipo es cada error
  errors.forEach(error =>{
    switch (error) {
      case 'required':
        messages.push(`El campo '${title}' es requerido`);
        break;
      case 'minlength':
        messages.push(`El campo '${title}' debe tener al menos ${control.errors? control?.errors ['minlength']?.requiredLength : "0"} caracteres`);
        break;
      case 'pattern':
        messages.push(`El campo '${title}' no tiene el formato correcto`);
        break;
    }
  });
  return messages;
}