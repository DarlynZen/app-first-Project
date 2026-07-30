import { Inject, Injectable } from "@angular/core";
import { Auth } from "../domain";
import { IAuthPort } from "../domain/auth.port";

//El adaptador aqui implementa el puerto definido en la capa de dominio
//Se separa en puerto->adaptador->aplicacion->componente para cumplir con la arquitectura hexagonal, ya que la aplicacion no debe depender de la implementacion del adaptador
//sino del puerto, que es una interfaz que define el contrato que debe cumplir el adaptador
@Injectable()
export class AuthApplication {
    constructor(@Inject("IAuthPort") private readonly port: IAuthPort){}

    login (auth: Auth){
        return this.port.signIn(auth);
    }
}