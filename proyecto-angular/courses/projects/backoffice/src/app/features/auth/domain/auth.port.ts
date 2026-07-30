import { Auth } from "./auth";

//Este puerto define la interfaz que debe cumplir el adaptador
//Funciona como una clase abstracta, pero en este caso es un tipo de objeto
export type IAuthPort = {
    signIn: (auth: Auth) => Promise<string>;
}