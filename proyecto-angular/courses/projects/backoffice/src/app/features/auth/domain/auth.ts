import { IAuth } from "./auth.type";

export class Auth {
    //Las propiedades son privadas y de solo lectura para garantizar la inmutabilidad del objeto Auth
    private readonly email: string;
    private readonly password: string;

    //props es un objeto que cumple con el type IAuth, que define las propiedades email y password
    constructor(props: IAuth) {
        if (!props.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            throw new Error('Invalid email format');
        }

        if (!props.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
            throw new Error('Password must be at least 8 characters and contain both letter and numbers');
        }

        this.email = props.email;
        this.password = props.password;
    }

    //Métodos públicos para acceder a las propiedades
    get properties() {
        return {
            //email y password me permite acceder a las propiedades privadas de auth
            //solo se podra cambiar el valor de email y password, pero no se podra modificar el objeto auth, ya que es inmutable
            email: this.email,
            password: this.password
        }
    }
}