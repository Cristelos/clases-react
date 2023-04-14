import { useState } from 'react';

export default function Form() {
    const [state, setState] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(1);
    }

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }
    
    return (
       <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="name" placeholder='Nombre'/> 

                <input type="text" onChange={handleChange} name="surname" placeholder='Apellidos'/>

                <input type="tel"  onChange={handleChange} name="phone" placeholder='Teléfono'/>

                <button>Enviar</button>
            </form>
      </div>
    );
  }
  