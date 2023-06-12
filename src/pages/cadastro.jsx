import { useState } from "react";
import Button from "../components/general/button";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Cadastro = () => {
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const rota = useNavigate()

    const CreateUser = () => {
        api.post('auth/users/', {
            email: email,
            username: username,
            password: password
        }).then((res) => {
            console.log(res);
            localStorage.setItem('dados', JSON.stringify(res.data))
            rota('/login')
        })
    }

    return (
        <div className="bg-bglogin h-screen bg-center flex flex-col items-center bg-no-repeat bg-cover justify-center">
            <div className="container relative before:absolute before:w-11/12 before:bg-[#fdfdfd] z-30 
          before:opacity-50 before:-z-10  before:h-full before:rounded-xl h-3/6 rounded-xl 
          items-center flex flex-col justify-evenly max-w-md">
                <div>
                    <input type="email" placeholder="email" name="email" id="email"
                        className='border border-black rounded-full w-4/5 h-12 pl-2 bg-transparent placeholder:text-grey2 placeholder:p-3' onChange={e => setEmail(e.target.value)} />
                    <input type="text" placeholder="password" name="password" id="password"
                        className='border border-black rounded-full w-4/5 h-12 pl-2 bg-transparent placeholder:text-grey2 placeholder:p-3' onChange={e => setUsername(e.target.value)} />
                    <input type="password" placeholder="password" name="password" id="password"
                        className='border border-black rounded-full w-4/5 h-12 pl-2 bg-transparent placeholder:text-grey2 placeholder:p-3' onChange={e => setPassword(e.target.value)} />
                </div>

                <Button children={'oii'} onClick={() => CreateUser()} width={'w-4/5'}></Button>
            </div>
        </div>
    );
}

export default Cadastro;