import { Auth } from "../domain";
import { IAuthPort } from "../domain/auth.port";

//El adaptador implementa el puerto definido en la capa de dominio
//En este caso, el adaptador es una clase concreta que implementa la interfaz definida en el puerto
export class AuthAdapter implements IAuthPort {
    signIn (auth: Auth): void{
        console.log("SignIn with", auth);
    }
}