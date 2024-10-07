import Usuario from "./Usuario";

export default interface Endereco{
    id: number;
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    usuario?: Usuario | null
    
}