import { Directive } from "@angular/core";
import { Validator } from "@angular/forms";

@Directive({
  selector: '[appEmailValidation]'
})

export class EmailValidation implements Validator {

}