import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import api from '../../services/api';


function GetProdutos({ qtd, styleImg, styleDiv, random }) {
    const [listaProdutos, setListaProdutos] = useState([])
    useEffect(() => {
        api.get("loja/corfoto/")
            .then((res) => {
                if (random) {
                    setListaProdutos(res.data)
                } else {
                    setListaProdutos(res.data)
                }
                console.log(res.data)
            })
    }, []);


    const styles = () => {
        let style = ""
        if (styleImg === 1) {
            style = "rounded-full h-36 w-36 md:h-48 md:w-48 lg:h-64 lg:w-64 xl:h-72 xl:w-72 flex"
        }
        if (styleImg === 2) {
            style = "rounded-3xl h-80 w-72 p-1 my-3"
        }
        if (styleImg === 3) {
            style = "rounded-xl h-64 w-56 mb-5"
        }
        return style
    }

    const stylesDiv = () => {
        let style = ""
        if (styleDiv === 1) {
            style = "flex flex-row mt-10 w-11/12"
        }
        if (styleDiv === 2) {
            style = "flex flex-row w-11/12"
        }
        return style
    }


    let contador = 0
    const mostrar = () => {
        contador += 1;
        if (contador <= qtd) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div className='w-full flex justify-center items-center'>
            <div className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ${stylesDiv()}`}>
                {listaProdutos.map((item) => (
                    <>
                        {mostrar() ? (
                            <div key={item.id}>
                                <Link className="flex text-white flex-col items-center" to={`/produto/${item.id}`}>
                                    <img className={`${styles()}`} src={item.foto} />
                                    {item.nome}
                                </Link>
                            </div>
                        ) : (
                            ""
                        )}
                    </>
                ))}
            </div>
        </div>
    )
}

export default GetProdutos;