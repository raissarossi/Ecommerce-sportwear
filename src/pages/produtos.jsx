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
            <div className="flex justify-start items-center">
                <div className="bg-slate-100 w-52 h-[665px] rounded-r-2xl hidden sm:flex">
                    <h1 className="font-thin text-2xl p-1">Filters</h1>
                </div>
                    <GetProdutos qtd={8} styleImg={2} styleDiv={2} />
            </div>
            <div className="w-full flex justify-center">
                <img
                    className='d-block p-1 rounded-2xl w-full mx-1'
                    src={require("../imgs/carousel/adidasPink.png")}
                    alt="Image3"
                />
            </div>
                    <GetProdutos qtd={20} styleImg={2} styleDiv={2} />
        </>
    );
}

export default Produtos;