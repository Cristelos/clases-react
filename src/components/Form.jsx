import { useState } from 'react';

export default function Form() {
    const [state, setState] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(1);
    }
    
    return (
       <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setState({...state, name: e.target.value})} placeholder='Nombre'/>
                <input type="text" onChange={(e) => setState({...state, surname: e.target.value})} placeholder='Apellidos'/>
                <input type="tel" onChange={(e) => setState({...state, phone: e.target.value})} placeholder='Teléfono'/>
                <button>Enviar</button>
            </form>
      </div>
    );
  }
  