import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import GetProdutos from '../components/aboutProd/getProduto';
import api from '../services/api';

export default function Home() {
  AOS.init();
  const rota = useNavigate();
  const [produtos, setProdutos] = useState([])
  const dados = JSON.parse(localStorage.getItem('dados'))


  useEffect(() => {
    api.get("loja/corfoto/").then((res) => {
      console.log(res.data)
      setProdutos(res.data)
      /*
      if preto
      produtos choice 
      setprodutosaleatoriso 
      */
    })
  }, [])

  function printarProdutos() {
    console.log(produtos);
  }
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={require("../imgs/carousel/NikeBlue.png")}
            alt="Image1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={require("../imgs/carousel/adidasYellow.png")}
            alt="Image2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={require("../imgs/carousel/NikePink.png")}
            alt="Image3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={require("../imgs/carousel/adidasOrange.png")}
            alt="Image3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={require("../imgs/carousel/adidasPink.png")}
            alt="Image3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={require("../imgs/carousel/adidasPurple.png")}
            alt="Image3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={require("../imgs/carousel/adidasVerde.png")}
            alt="Image3"
          />
        </Carousel.Item>
      </Carousel>

      <div className='pt-10 flex justify-evenly'>
        <button className="bg-black rounded-full w-1/5 lg1:w-2/12 h-8 lg1:h-12 text-white" onClick={() => { rota("/produtos") }}>All Products</button>
        <button className="bg-black rounded-full w-1/5 lg1:w-2/12 h-8 lg1:h-12 text-white" onClick={() => { rota("/produtos") }}>All Products</button>
        <button className="bg-black rounded-full w-1/5 lg1:w-2/12 h-8 lg1:h-12 text-white" onClick={() => { rota("/produtos") }}>All Products</button>
        <button className="bg-black rounded-full w-1/5 lg1:w-2/12 h-8 lg1:h-12 text-white" onClick={() => { rota("/produtos") }}>All Products</button>
      </div>


      <GetProdutos className='flex' qtd={4} styleImg={1} styleDiv={1} />


      <div>
        <h1 className='pb-8 pt-8 text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold '>Brings the Energy</h1>
      </div>


      <div className="grid grid-rows-2 md:grid-rows-4 grid-flow-col gap-2 justify-center max-sm:p-1 sm:p-1 lg:p-2 xl:p-3">
        <div className="row-span-2 col-span-4 ...">
          <img data-aos-duration="2000" data-aos-anchor-placement="top-center" data-aos="fade-down-right" className='max-sm:dis sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl' src={require("../imgs/home/home01.png")} alt="" />
        </div>
        <div className="row-span-2 col-span-4 ...">
          <img data-aos-duration="1500" data-aos-anchor-placement="top-center" data-aos="fade-up-right"
            className='max-sm:rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl' src={require("../imgs/home/home02.png")} alt="" />
        </div>
        <div className="row-span-4 col-span-8 ...">
          <img data-aos-duration="2000" data-aos-anchor-placement="top-center" data-aos="fade-right"
            className='max-sm:rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl' src={require("../imgs/home/home03.png")} alt="" />
        </div>
        <div className="row-span-4 col-span-5 ...">
          <img data-aos-duration="2000" data-aos-anchor-placement="top-center" data-aos="zoom-in-up"
            className='max-sm:rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl' src={require("../imgs/home/home04.png")} alt="" />
        </div>
        <div className="row-span-2 col-span-4 ...">
          <img data-aos-duration="2000" data-aos-anchor-placement="top-center" data-aos="fade-down-left"
            className='max-sm:rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl' src={require("../imgs/home/home05.png")} alt="" />
        </div>
        <div className="row-span-2 col-span-4 ...">
          <img data-aos-duration="1500" data-aos-anchor-placement="top-center" data-aos="fade-up-left"
            className='max-sm:rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl' src={require("../imgs/home/home06.png")} alt="" />
        </div>
        <div className="max-sm:hidden row-span-4 col-span-5 ...">
          <img data-aos-duration="3000" data-aos-anchor-placement="top-center" data-aos="fade-left"
            className='sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl' src={require("../imgs/home/home07.png")} alt="" />
        </div>
      </div>

      <div>
        <h1 className='pb-8 pt-3 text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold flex justify-end'>All in or nothing</h1>
      </div>
      <GetProdutos className='flex' qtd={4} styleImg={3} styleDiv={1} />
      <div className='w-full'>
        <img className='w-full' src={require("../imgs/home/image5.png")} alt="" />
      </div>


    </div>
  );
}
