import React, {useState, useEffect} from 'react'
 function Contador (){
    const [numero, setNumero] = useState(0);
    useEffect(()=>{
 
    });
    return (
            <div>
              <p>You clicked {numero} times</p>
              <button onClick={() => setNumero(numero + 1)}>
                ++
              </button>
            </div>
          );
}

export default Contador