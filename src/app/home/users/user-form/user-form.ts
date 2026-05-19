import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { IUser, IGender } from '../interfaces/user';

@Component({
  selector: 'app-user-form',
  imports: [],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {

  @Output() onCreate: EventEmitter<IUser> = new EventEmitter();
  @ViewChild("nameInput") InputName!: ElementRef<HTMLInputElement>;
  @ViewChild("lastNameInput") InputLastname!: ElementRef<HTMLInputElement>;
  @ViewChild("emailInput") InputEmail!: ElementRef<HTMLInputElement>;
  @ViewChild("ageInput") InputAge!: ElementRef<HTMLInputElement>;
  @ViewChild("genderInput") InputGender!: ElementRef<HTMLInputElement>;

  name = "";
  lastname = "";
  email = "";
  age = 0;
  gender = "";

  constructor() {
    //metodo constructor es el primer metodo en ejecutarse cuando se crea una instancia de la clase, es decir, cuando se crea un nuevo objeto de tipo UserForm. Es común usar el constructor para inicializar propiedades o configurar el estado inicial del componente.
    //para saber quién es el usuario que está escribiendo en el input
    /* const input = document!.getElementById('name')!
    
    console.log("input",input);
    
    input.addEventListener('input', function(event) {
    console.log((event.target as HTMLInputElement).value);
  }); */
  }

  onInputName(evt: Event) {
    this.name = (evt.target as HTMLInputElement).value;
  }

  onInputLastname(evt: Event) {
    this.lastname = (evt.target as HTMLInputElement).value;
  }

  onInputEmail(evt: Event) {
    this.email = (evt.target as HTMLInputElement).value;
  }

  onInputAge(evt: Event) {
    this.age = Number((evt.target as HTMLInputElement).value);
  }

  onInputGender(target: EventTarget){
    this.gender = (target as HTMLSelectElement).value as IGender;
  }

  onSubmit() {
    if(!this.name || !this.lastname || !this.email || !this.age || !this.gender) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    if(this.age <= 0) {
      alert("Por favor, ingrese una edad válida.");
      return;
    }

    this.onCreate.emit({
      name:this.name,
      lastname:this.lastname,
      email:this.email,
      age:this.age,
      gender:this.gender as IGender});

    this.reset();
  }

  reset(){
    this.name = "";
    this.lastname = "";
    this.email = "";
    this.age = 0;
    this.gender = "";
    this.InputName.nativeElement.value = "";
    this.InputLastname.nativeElement.value = "";
    this.InputEmail.nativeElement.value = "";
    this.InputAge.nativeElement.value = "";
    this.InputGender.nativeElement.value = "";
  }
  

  //metodo ngAfterViewInit es un método del ciclo de vida de Angular que se ejecuta después de que la vista del componente ha sido completamente inicializada. Es un buen lugar para realizar tareas que requieren acceso a elementos del DOM, como agregar event listeners a elementos específicos.
  /*   ngAfterViewInit() {
      const input = document!.getElementById('name')! as HTMLInputElement;
  
      console.log("input", input);
  
      input.addEventListener('input', function (evt) {
        this.value = (evt.target as HTMLInputElement).value;
      });
    } */
}

