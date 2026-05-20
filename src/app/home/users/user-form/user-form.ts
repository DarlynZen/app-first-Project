import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IUser, IGender } from '../interfaces/user';

@Component({
  selector: 'app-user-form',
  imports: [],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  //El uso de Partial significa que el campo podria o no obtener el id como number, como opcional en el caso de que se este creando un nuevo usuario, no se tendria un id asignado, pero en el caso de que se este editando un usuario existente, si se tendria un id asignado. Esto permite que el componente UserForm sea reutilizable tanto para la creación como para la edición de usuarios, ya que puede manejar ambos casos sin requerir cambios en su lógica interna.
  @Output() onCreate: EventEmitter<IUser & Partial<{ id: number }>> = new EventEmitter();
  @Input() editUser: IUser & {id: number} | null = null;
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
  isEditMode = false;
  //inicialmente sera nulo
  id: number | null = null;

  constructor() {
    //metodo constructor es el primer metodo en ejecutarse cuando se crea una instancia de la clase, es decir, cuando se crea un nuevo objeto de tipo UserForm. Es común usar el constructor para inicializar propiedades o configurar el estado inicial del componente.
    //para saber quién es el usuario que está escribiendo en el input
    /* const input = document!.getElementById('name')!
    
    console.log("input",input);
    
    input.addEventListener('input', function(event) {
    console.log((event.target as HTMLInputElement).value);
  }); */
  }

  ngOnChanges(){
    //si editUser es diferente de nulo
    if(this.editUser) {
      this.name = this.editUser.name;
      this.lastname = this.editUser.lastname;
      this.email = this.editUser.email;
      this.age = this.editUser.age
      this.gender = this.editUser.gender;
      this.isEditMode = true;
      this.id = this.editUser.id;

      this.InputName.nativeElement.value = this.name;
      this.InputLastname.nativeElement.value = this.lastname;
      this.InputEmail.nativeElement.value = this.email;
      this.InputAge.nativeElement.value = this.age.toString();
      this.InputGender.nativeElement.value = this.gender;
    }
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

    //
    this.onCreate.emit({
      name:this.name,
      lastname:this.lastname,
      email:this.email,
      age:this.age,
      gender:this.gender as IGender,
      id: this.id ?? Date.now(), //si id es nulo, se asigna un valor único basado en la fecha actual, de lo contrario se asigna el valor de id existente (en caso de edición)
    });

    this.reset();
  }

  reset(){
    this.name = "";
    this.lastname = "";
    this.email = "";
    this.age = 0;
    this.gender = "Masculino";
    this.isEditMode = false;
    this.id = null;

    this.InputName.nativeElement.value = "";
    this.InputLastname.nativeElement.value = "";
    this.InputEmail.nativeElement.value = "";
    this.InputAge.nativeElement.value = "";
    this.InputGender.nativeElement.value = "Masculino";
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

