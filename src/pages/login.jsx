import apple from '../imgs/login/appleicon.png'
import google from '../imgs/login/googleicon.png'
import Button from '../components/general/button'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import api from '../services/api';
// import { Button } from 'bootstrap';


function Login() {
  const rota = useNavigate();
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")

  const logar = () =>{
    localStorage.setItem("dados", JSON.stringify({login:login, senha:senha}))
    rota("/home")
  }


  const Logar = () => {
    api.post('auth/jwt/create', {
      username: login,
      password: senha
    }).then((res) => {
      console.log(res)
      localStorage.setItem('dados', JSON.stringify(res.data));
      rota('/home')
    })
    .catch((error) => {
      console.log(error);
      rota('/')
    })
  }
  return (
    <div className="bg-bglogin h-screen bg-center flex flex-col items-center bg-no-repeat bg-cover justify-center">
      <div className="container relative before:absolute before:w-11/12 before:bg-grey1 z-30 
        before:opacity-50 before:-z-10  before:h-full before:rounded-xl h-3/6 rounded-xl 
        items-center flex flex-col justify-evenly max-w-md">

        <input type="email" placeholder="email" name="email" id="email"
          className='border border-black rounded-full w-4/5 h-12 pl-2 bg-transparent placeholder:text-grey2 
          placeholder:p-3' onChange={e=>setLogin(e.target.value)}/>
        <input type="password" placeholder="password" name="password" id="password"
          className='border border-black rounded-full w-4/5 h-12 pl-2 bg-transparent placeholder:text-grey2 
          placeholder:p-3' onChange={e=>setSenha(e.target.value)}/>
          <Button children={'Enter'} onClick={()=>Logar()} width={'w-4/5'} alert={false}></Button>
        <div className="flex flex-row items-center w-11/12 p-4">
          <div className="bg-black w-full h-px" />
          <h1 className="p-2">or</h1>
          <div className="bg-black w-full h-px" />
        </div>

        <div className="flex justify-evenly w-full">
          <button className="bg-black rounded-full text-white flex items-end p-3">
            Log In with <img src={apple} className="pl-2"/>
          </button>
          <button className="bg-white  rounded-full flex items-end p-3">
            Log In with <img src={google} className="pl-2"/>
          </button>
        </div>

        <button className='text-blue1 font-bold'>Forgot Password?</button>
      </div>
      <div className="container relative before:absolute before:w-11/12 before:bg-grey1 z-30 
        before:opacity-50 before:-z-10 before:h-full before:rounded-xl h-16 rounded-xl m-5 flex items-center 
        justify-evenly max-w-md">
          <p className='text-lg'>Don't have an account?</p>
          <button className='text-blue1 font-bold text-lg' onClick={()=>rota('/cadastro')}>Sing Up</button>
      </div>
    </div>
  );
}

export default Login;
