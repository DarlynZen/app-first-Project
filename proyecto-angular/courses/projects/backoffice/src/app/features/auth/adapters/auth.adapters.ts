import { Auth } from "../domain";
import { IAuthPort } from "../domain/auth.port";
import { delay } from "lib";

const users = [
    {email: "user1@gmail.com", password: "Password1", accessToken: "token-user1-abc123"},
    {email: "user2@gmail.com", password: "Password2", accessToken: "token-user2-def456"},
    {email: "user3@gmail.com", password: "Password3", accessToken: "token-user3-ghi789"},
    {email: "user4@gmail.com", password: "Password4", accessToken: "token-user4-jkl012"},
    {email: "user5@gmail.com", password: "Password5", accessToken: "token-user5-mno345"},
    {email: "user6@gmail.com", password: "Password6", accessToken: "token-user6-pqr678"},
    {email: "user7@gmail.com", password: "Password7", accessToken: "token-user7-stu901"},
    {email: "user8@gmail.com", password: "Password8", accessToken: "token-user8-vwx234"},
    {email: "user9@gmail.com", password: "Password9", accessToken: "token-user9-yza567"},
    {email: "user10@gmail.com", password: "Password10", accessToken: "token-user10-bcd890"}
]

//El adaptador implementa el puerto definido en la capa de dominio
//En este caso, el adaptador es una clase concreta que implementa la interfaz definida en el puerto
export class AuthAdapter implements IAuthPort {
    async signIn (auth: Auth): Promise<string> {
        const {email, password} = auth.properties;
        const user = users.find(user => user.email === email && user.password === password);
        await delay(4000); // Simula un retraso de 4 segundos para imitar una llamada a un servicio externo

        if(!user){
            throw new Error("Usuario o contraseña incorrectos");
        }
        
        console.log("SignIn with", auth);
        return user.accessToken;
}}