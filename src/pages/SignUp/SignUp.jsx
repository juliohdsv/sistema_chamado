import { useState } from "react"; 
import { Link } from "react-router-dom"; 

import Icon from "../../assets/images/logo.png";

export default function SingUp(){

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

function teste(){

  console.log(email);
  console.log(password);
  
}

  return(
    <div 
      className="flex flex-col w-screen h-screen justify-center items-center bg-primary-dark"
    >

      <div 
        className="bg-light w-11/12 h-2/5 xl:w-1/4 xl:h-2/5 flex flex-col justify-start items-center"
      >

        <div 
          className="bg-secondy-dark w-full flex flex-col justify-center items-center overflow-hidden"
        >  
            <img 
              src={Icon} 
              alt="Logo do sistema de chamados" 
              className="w-32 h-28 p-4"
            />
        </div>

        <form 
          action=""
          className="w-11/12 flex flex-col justify-center items-center mt-5 gap-4"
        >
            <h1 className="text-2xl font-bold mb-2">Cadastro</h1>

            <input 
              type="email" 
              name="email"
              placeholder="email@exemplo.com"
              className="input-form"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />

            <input 
              type="password" 
              name="password" 
              placeholder="********"
              className="input-form"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />

            <div 
              className="flex flex-col justify-center items-center w-full gap-2"
            >
              <input 
                type="submit" 
                value="Registrar"
                className="w-10/12 h-8 btn-form"
                onClick={teste()}
              />

              <Link
                to="/"
                className="w-10/12 h-8 btn-form"
              >
                Voltar
              </Link>
            </div>

        </form>
      </div>
    </div>
  )
}