import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { errorsValidations } from "./errors-validations";

@Component({
  selector: 'app-error-validations',
  template: `
    @for(error of errors; track error){
      <span class="error">{{error}}</span>}
    `
})

//Para que funcione como control se usara el @Component
export class ErrorValidations{
    @Input() fg!: FormGroup;
    @Input() controlName!: string;
    @Input() title!: string;

    public errors: string[] = [];

    ngAfterViewInit(){
        this.errors = errorsValidations(this.fg, this.controlName, this.title);
    }

}