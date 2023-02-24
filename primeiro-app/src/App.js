import React from 'react';
/* 
Sempre que formos criar um novo componente, ou seja, um elemento que vamos colocar na tela, 
precisamos importar o componente React da dependência react.
Dessa forma o React vai entender que esse código é um componente que será renderizado na tela. 
Isso é uma mecânica padrão da construção de componentes com React.
*/
import './App.css';

import Header from './componentes/Header/'; // Como o arquivo tem nome index.js, não é preciso 
import Footer from './componentes/Footer/'; // descrever seu nome
import HomePage from './componentes/HomePage';
// Para importar um componente que não é default, devemos inserir o nome entre { }
// Para importar todos os componentes de um arquivo >> import * as Formulario from '...';


// Pode ser utilizada uma arrow function >> const App = () => {}
// Podemos exportar diretamente na linha abaixo: export default function App() {}
function App() {
// A sintaxe que usamos dentro do return se chama JSX e é bem parecida com HTML.
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
