export interface IData { 
    id: number;
    title: string;
    body: string
}


export interface IFieldInput {
    name: string,
    email: string,
    password: string
}

export interface IFieldErrors {
    name?: string,
    email?: string,
    password?: string
}