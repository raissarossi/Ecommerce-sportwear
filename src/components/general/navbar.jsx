import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const dados = JSON.parse(localStorage.getItem('user'))
    const rota = useNavigate();
    const [menuAberto, setMenuAberto] = useState(false);

    const abrirMenu = () => {
        setMenuAberto(true);
    };

    const fecharMenu = () => {
        setMenuAberto(false);
    };

    const Logout = () => {
        if (dados){
            console.log(`LOOOOOOOOOOOOOOOOGOUT`);
            localStorage.removeItem("dados")
            localStorage.removeItem("user")
            rota("/")
        }
        return
    }

    return (
        <>
            <div className="h-12 bg-black flex justify-between items-center">

                <div className="text-white pl-5">
                    {dados ?
                        <div className="flex flex-row" onMouseOver={abrirMenu}
                            onMouseOut={fecharMenu}>
                            <button
                                className=""
                                onClick={menuAberto ? abrirMenu : fecharMenu}
                            >
                                {dados.login}
                            </button>
                            {menuAberto && (
                                <button className="p-1 ml-1 bg-slate-50 text-gray-950 hover:bg-gray-500 hover:text-gray-50 rounded-md flex items-center justify-center"
                                onClick={()=>Logout()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                                    </svg>
                                    Log Out
                                </button>
                            )}
                        </div>
                        :
                        <>
                            <button className="h-full pl-3 pr-3 hover:text-blue1"
                                onClick={() => { rota("/login") }}>Log In</button>
                        </>
                    }
                </div>
                <button onClick={() => { rota('/yourcart') }} className="text-white pr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </button>

            </div>
        </>
    )
}

export default Navbar;