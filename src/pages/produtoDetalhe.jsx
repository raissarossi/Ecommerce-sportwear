import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import api from '../services/api'
import BackBtn from '../components/general/backBtn'
import Button from '../components/general/button'
import Alert from '../components/general/alert'


const ProdutoDetalhe = ({ add }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [idProduto, setIdProduto] = useState([])
  const [foto, setFoto] = useState([])
  const [idCor, setIdCor] = useState(0)
  const [cor, setCor] = useState([])
  const [idPeca, setIdPeca] = useState(0)
  const [nome, setNome] = useState([])
  const [descricao, setDescricao] = useState([])
  const [preco, setPreco] = useState([])
  const [marca, setMarca] = useState([])
  const [genero, setGenero] = useState([])
  const [categoria, setCategoria] = useState([])
  const [ocasiao, setOcasiao] = useState([])
  const [coresDisponiveis, setCoresDisponiveis] = useState([])
  const [tamDisponiveis, setTamDisponiveis] = useState([])

  useEffect(() => {
    api.get("loja/corfoto/")
      .then((res) => {
        res.data.map((item) => {
          if (item.id == id) {
            console.log(item)
            setIdProduto(item.id)
            setFoto(item.foto)
            setIdPeca(item.peca)
            setIdCor(item.cor)
            return null
          }
        })
      })
  }, [])

  useEffect(() => {
    api.get(`loja/peca/${idPeca}/`)
      .then((res) => {
        setNome(res.data.nome)
        setDescricao(res.data.descricao)
        setPreco(res.data.preco)
      })
  }, [idPeca])

  useEffect(() => {
    api.get(`loja/cores/${idCor}/`)
      .then((res) => {
        console.log("qqqqqqqqqqq")
        setCor(res.data.nome)
      })
  }, [idCor])

  return (
    <>
      <BackBtn />
      <div className='flex w-full justify-center'>
        <div className='flex w-11/12 lg:w-4/6'>
          <div className='sm:w-1/2 w-full px-10 sm:max-h-[450px] flex flex-col justify-between'>
            
            <div>
              <h1 className="text-black text-3xl">{nome}</h1>
              <p className="text-black text-xl">{cor}</p>
            </div>

            <img src={foto} className='w-full rounded-2xl flex sm:hidden pb-10'></img>
            <p className="text-black">{descricao}</p>
            <h2>${preco}</h2>

          </div>

          <div className='items-center justify-center w-1/2 hidden sm:flex'>
            <img src={foto} className='w-10/12 rounded-2xl'></img>
          </div>

        </div>
      </div>

      <div className='w-full pt-3 sm:pt-10 flex justify-center'>
        <div className='flex w-11/12 lg:w-4/6 px-10'>
          <Button children={'Add to Cart'} onClick={() => add(foto, idProduto, nome, cor, preco)} width={'w-64'} title={"This item has been added"} text={`${nome} || ${cor}`} alert={true} />
        </div>
      </div>
    </>
  )
}

export default ProdutoDetalhe
