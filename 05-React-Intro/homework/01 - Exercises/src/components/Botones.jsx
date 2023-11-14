import React from 'react'

class Botones extends React.Component {
    handleClick = (modulo) => {
        alert(`Clic en el módulo ${modulo}`);
    };

       render(){
        return (
            <div>
                <button onClick={() => alert('Modulo 1')}>Modulo 1</button>
                <button onClick={() => alert('Modulo 2')}>Modulo 2</button>
            </div>
          )
    }
  
}

export default Botones
