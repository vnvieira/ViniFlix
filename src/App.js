import React from 'react';
import Menu from './components/Menu';
import './index.css';
import BannerMain from './components/BannerMain';
import dadosIniciais from './data/dados_iniciais.json'
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (

     <div>
      <Menu />


      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />

    <Footer/>
   </div>
  )
}

export default App;
