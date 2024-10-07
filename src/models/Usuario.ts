import Endereco from "./Endereco";

export default interface Usuario{
    id: number;
    nome: string;
    foto: string;
    usuario: string;
    senha: string;
    roles: string;
    endereco?: Endereco | null;
    
}