import React from 'react';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";
import Catalogo from './components/Catalogo';
import ProductCard from './components/ProductCard';
import Searchbar from './components/SearchBar';
import OrderBy from './components/OrderBy';
import Pagination from './components/Pagination';

function App() {
  return (
    <React.StrictMode>
      <div style={{width:"99%", margin:'0 auto'}}>
        <div className='grid justify-content-center'>
          <div className="col-12 text-center">
            <Searchbar/>
            <OrderBy/>
          </div>
          <Catalogo>
            <ProductCard
              src="/public/iphone.jpg"
              title="Contenido"
              precio="1000"
              condicion="Nuevo"
              stock="100"
            />
          </Catalogo>
        </div>
        <Pagination/>
      </div>
    </React.StrictMode>
  );
}

export default App;
