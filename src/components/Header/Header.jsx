// import { useState } from 'react';
import React from 'react';
// import {Form, Button} from 'react-bootstrap';
// import { FormControl, InputGroup} from 'react-bootstrap';

function Header() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

  return (
    <section className='container'>




        <h1>Faça a diferença!</h1>
        <h6>Procure uma ONG ou entidade para conhecer</h6>
        <div className="input-group mb-3">
      <input
        type="text"
        className="form-control rounded-start"
        placeholder="Digite sua pesquisa"
      />
      <button className="btn btn-primary rounded-end" type="button">
        Buscar
      </button>
    </div>
      <br />
    </section>

);

}

export default Header;