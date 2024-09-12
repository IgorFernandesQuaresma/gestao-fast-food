import burguer from "../../assets/burguer.jpg";
import ToggleButton from "../../components/toggle";
import { useTheme } from "../../contexts/ThemeContext";


function App() {
  const { isDarkMode } = useTheme();

  return (
  <div data-theme={isDarkMode ? "dark" : "hidden"} className="relative flex justify-center items-center min-h-screen ">
      <div className="relative flex justify-center items-center min-h-screen w-1/2"
        style={{ backgroundImage: `url(${burguer})`, backgroundSize: 'cover', backgroundPosition: 'center 30%' }}>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      <div className="bg-background w-1/2 flex justify-center items-center min-h-screen">
      <form className="flex flex-col justify-center items-center rounded-sm w-10/12 h-[60vh] p-4 gap-4"
      style={{ 
        boxShadow: '7px 7px 12px -1px var(--color-shadow)',
        WebkitBoxShadow: '7px 7px 12px -1px var(--color-shadow)',
        MozBoxShadow: '7px 7px 12px -1px var(--color-shadow)'
      }}>
            <div className="flex justify-center items-center w-4/5">
            <label htmlFor="usuario" className="text-primary mr-2 w-1/5 text-right">Usuario:</label>
                  <input
                    type="text"
                    id="usuario"
                    name='usuario'
                    placeholder="Digite seu usuario"
                    required
                    className="border border-gray-300 bg-transparent placeholder:text-primary placeholder:opacity-100 p-2 rounded-sm w-4/5"/>
            </div>
            <div className="flex justify-center items-center w-4/5">
            <label htmlFor="usuario" className="text-primary mr-2 w-1/5 text-right">Senha:</label>
                  <input
                    type="text"
                    id="usuario"
                    name='usuario'
                    placeholder="Digite sua senha"
                    required
                    className="border border-gray-300 bg-transparent placeholder:text-primary placeholder:opacity-100 p-2 rounded-sm w-4/5"/>
            </div>
            <div className=" flex justify-center items-center w-3/4">
                <button className="w-3/5 bg-accent text-white border border-accent rounded-sm py-2 px-4 hover:bg-tertiary hover:border-tertiary focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type="submit">Entrar</button>
            </div>
        </form>

        
      <ToggleButton />
    
      </div>
    </div>
  
  )
}

export default App
