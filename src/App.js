import React from 'react';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";
import Catalogo from './components/Catalogo';
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
        </div>
        <Pagination/>
        <div className='grid justify-content-center'>
          <Catalogo/>
        </div>
        <Pagination/>
      </div>
    </React.StrictMode>
  );
}

export default App;
