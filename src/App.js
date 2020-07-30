import React from 'react';
import Menu from './components/Menu';
import './index.css';
import BannerMain from './components/BannerMain';
import dadosIniciais from './data/dados_iniciais.json'
import VideoCardGroup from './components/Carousel';
import Carousel from './components/Carousel';

function App() {
  return (

     <div>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}  
         url={dadosIniciais.categorias[0].videos[0].url}      
        />
    
    

   </div>
  )
}

export default App;
