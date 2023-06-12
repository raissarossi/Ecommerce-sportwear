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
        if (styleImg == 1) {
            style = "rounded-full h-64 w-64 flex"
        }
        if (styleImg == 2) {
            style = "rounded-3xl h-64 w-52 p-2"
        }
        if (styleImg == 3) {
            style = "rounded-xl h-64 w-64 p-2"
        }
        return style
    }

    const stylesDiv = () => {
        let style = ""
        if (styleDiv == 1) {
            style = "flex flex-row justify-evenly mt-10"
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
        <>
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 ${stylesDiv()}`}>
                {listaProdutos.map((item) => (
                    <>
                        {mostrar() ? (
                            <div key={item.id}>
                                <Link className="flex text-white flex-col items-center" to={`/produto/${item.id}`}>
                                    <img className={`w-full ${styles()}`} src={item.foto} />
                                    {item.nome}
                                </Link>
                            </div>
                        ) : (
                            ""
                        )}
                    </>
                ))}
            </div>
        </>
    )
}

export default GetProdutos;