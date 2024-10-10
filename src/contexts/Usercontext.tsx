import { ReactNode, createContext, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../service/Service";
import { ToastAlert } from "../util/ToastAlert";



interface AuthContextProps{
    usuario: UsuarioLogin;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    isLoading: boolean;
}

interface AuthProviderProps{
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({children}: AuthProviderProps){

    const [usuario, setUsuario] = useState<UsuarioLogin>({
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
      tipo: '',
      token: ''
    });

  

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(userLogin: UsuarioLogin ){
        setIsLoading(true);

        try{

            await login(`/usuarios/logar`, userLogin, setUsuario)
            ToastAlert("Usuário autenticado com sucesso!",'sucesso');
            setIsLoading(false);
        
            
        }catch(error){
            ToastAlert("Dados do Usuário inconsistentes!",'erro');
            setIsLoading(false);

        }
        
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            tipo: '',
            token: ''
        })
    }

    return(
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
    
}
