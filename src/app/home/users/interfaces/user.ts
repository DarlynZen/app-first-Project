export interface IUser {
    //el uso de ? significa que se recibirá un tipo de dato number o no se recibirá nada, es decir opcional
    id?: number;
    name: string;
    lastname: string;
    email: string;
    age: number;
    gender: IGender;
}

export type IGender = "Masculino" | "Femenino";