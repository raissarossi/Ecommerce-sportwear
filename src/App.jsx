import { Route, Routes, useNavigate, Link, useLocation } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Produtos from './pages/produtos'
import ProdutoDetalhe from './pages/produtoDetalhe'
import Navbar from './components/general/navbar'
import { useEffect, useState } from 'react'
import Cart from './pages/cart'
import Cadastro from './pages/cadastro'
function App() {
  const navigate = useNavigate()
  let pagina = useLocation()
  //========================================================================
  //NAVBAR
  //========================================================================
  const [visible, setVisible] = useState(true)
  useEffect(()=>{
    console.log(pagina);
    if (pagina.pathname === '/cadastro' || pagina.pathname === '/'){
      setVisible(false)
    }
    else{
      setVisible(true)
    }
  },[pagina])

  //========================================================================
  //CART
  //========================================================================
  const [move, setMove] = useState(false)
  const add = (foto, idProduto, nome, cor, preco) => {
    let item = [{ 'foto': foto, 'id': idProduto, 'nome': nome, 'cor': cor, 'precoU': preco, 'qtd': 1 }]
    let itemAdd = true
    if (localStorage.getItem('cart') != undefined) {
      item = JSON.parse(localStorage.getItem('cart'))
      item.map((item) => {
        if (item.id == idProduto) {
          item.qtd += 1
          itemAdd = false
        }
      })
      if (itemAdd) {
        item = item.concat({ 'foto': foto, 'id': idProduto, 'nome': nome, 'cor': cor, 'precoU': preco, 'qtd': 1 })
      }
    }
    console.log(item)
    localStorage.setItem('cart', JSON.stringify(item))
    setMove(!move)
  }


  const remove = (idProduto) => {
    if (localStorage.getItem('cart') != undefined) {
      let item = JSON.parse(localStorage.getItem('cart'))
      let newItem = []
      item.map((item) => {
        if (item.id == idProduto) {
          item.qtd -= 1
        }
        if (item.qtd > 0) {
          newItem.push(item)
        }
      })
      localStorage.setItem('cart', JSON.stringify(newItem))
      setMove(!move)

    }
  }

  return (
    <div>
      {visible ? <Navbar /> : <></>}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/produto/:id' element={<ProdutoDetalhe add={add} />} />
        <Route path='/yourcart' element={<Cart add={add} remove={remove} move={move} />} />
        <Route path='/cadastro' element={<Cadastro />} />

      </Routes>
    </div>
  )
}

export default App