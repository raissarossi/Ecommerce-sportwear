import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/general/alert";
import BackBtn from '../components/general/backBtn'
import Button from "../components/general/button";

const Cart = ({ add, remove, move }) => {
    const rota = useNavigate()
    const dados = JSON.parse(localStorage.getItem('user'))
    const [cart, setCart] = useState(false)
    const [lista, setLista] = useState([])
    const [soma, setSoma] = useState(0)

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('cart')) != undefined) {
            setLista(JSON.parse(localStorage.getItem('cart')))
            setCart(true)
        }
        if (JSON.parse(localStorage.getItem('cart'))) {
            if (JSON.parse(localStorage.getItem('cart')).length === 0) {
                setCart(false)
            }
            if (JSON.parse(localStorage.getItem('cart')).length > 0) {
                setCart(true)
            }
        }

        else {
            setCart(false)
        }
    }, [move])

    useEffect(() => {
        const total = lista.reduce((acc, item) => {
            return acc + item.precoU * item.qtd;
        }, 0);
        setSoma(total);
    }, [lista])

    const finalizar = () => {
        localStorage.removeItem('cart')
        setTimeout(() => {
            rota('/')
        }, 3000);
    }
    const redirecionar = () => {
        setTimeout(() => {
            rota('/login')
        }, 3000);
    }

    return (
        <>
            <BackBtn />
            {cart ?
                <>
                    <h1 className="flex w-screen justify-center">Your Cart</h1>
                    {lista.map((item) =>
                        <>

                            {console.log(item)}
                            <div key={item.id} className="p-2 m-3 flex flex-col items-start">
                                <div className="flex items-center">
                                    <img className="h-[180px] object-cover  rounded-md" src={item.foto} />
                                    <div className="ml-5 flex flex-col">
                                        <div className="flex flex-col">
                                            <span><Link to={`/produto/${item.id}`} className={"no-underline text-black"}>{item.nome}</Link></span>
                                            <span>${item.precoU * item.qtd}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span>Quantity: {item.qtd}</span>
                                            <div>
                                                <div onClick={() => add(item.foto, item.id, item.nome, item.cor, item.precoU)} className="h-5 w-5 ml-2 flex justify-center bg-slate-200 hover:bg-slate-400 rounded-t-md items-center cursor-pointer">+</div>
                                                <div onClick={() => remove(item.id)} className="h-5 w-5 ml-2 flex justify-center bg-slate-300 hover:bg-slate-400 rounded-b-md items-center cursor-pointer">-</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </>

                    )}
                    <div>
                        <h1>Total: ${soma}</h1>
                    </div>
                    <div className="w-full flex justify-center">
                        {dados ?
                            <Button children={"Checkout"} onClick={() => finalizar()} width={"w-64"} title={"Approved"} text={"Yeahh... Your purchase was successful"} alert={true} />
                            :
                            <Button children={"Checkout"} onClick={() => redirecionar()} width={"w-64"} title={"Error"} text={"Ops... You are not logged"} alert={true} color={"red"}/>
                        }
                    </div>
                </>
                :
                <>
                    <h1 className="text-3xl">YOUR CART IS EMPTY...</h1>
                    <button onClick={() => rota("/produtos")} className="hover:text-blue1">See Products</button>
                </>}

            <>
            </>

        </>
    );
}

export default Cart;