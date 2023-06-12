import React, { Component } from "react";
import { useNavigate, Link } from "react-router-dom";
import GetProdutos from "../components/aboutProd/getProduto";
import api from "../services/api";
import BackBtn from "../components/general/backBtn";


const Produtos = () => {
    api.get("/loja/corfoto/")
        .then((res) => {
            console.log(res.data)
        })
    let navigate = useNavigate();



    return (
        <>
            <BackBtn />
            <div>
                <h1>Woman Clothes</h1>
            </div>
            <div className="flex">
                <div className="bg-slate-100 w-52 h-[700px] rounded-r-2xl hidden sm:flex">
                    <h1 className="font-thin text-2xl p-1">Filters</h1>
                </div>
                    <GetProdutos qtd={12} styleImg={2} styleDiv={1} />
            </div>
            <div className="w-full flex justify-center">
                <img
                    className='d-block p-1 rounded-2xl'
                    src={require("../imgs/carousel/adidasPink.png")}
                    alt="Image3"
                />
            </div>
        </>
    );
}

export default Produtos;