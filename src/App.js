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
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[1].titulo}  
         url={dadosIniciais.categorias[0].videos[1].url}      
        />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />
      <Carousel
      category={dadosIniciais.categorias[1]}
      />

    <Carousel
      category={dadosIniciais.categorias[2]}
      />


    <Footer/>
   </div>
  )
}

export default App;
