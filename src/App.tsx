import { useState, FormEvent} from 'react'
import './App.css'

import logoimg from './assets/logo.png'


/*calculo: alcool/ gasolina 
e se o resultado  for menos que 0.7 compensa usar o alcool
*/


function App() {
const [gasolinaInput, setAlGasolinaInput] = useState(1)
const [alcoolInput, setalcoolInput] = useState(1)

function calcular (event: FormEvent){
  event.preventDefault();
  let calculo = (alcoolInput / gasolinaInput)
  if (calculo <=0.7){
    alert ("compensa usar alcool") 
  }else{ 
    alert ("compensa usar gasolina") 
  }


}

return (

      <div>
        <main className="container">
          <img
          className="logo"
          src={logoimg}
          alt="Logo da calculadora de gasolina"
          />
     <h1 className="title"> Qual melhor opção ?</h1>
        
        <form className="form" onSubmit={calcular}>

<label>Álcool (preço por litro):</label>
<input
className="input"
type="number"
placeholder="4,90"
min="1"
step="0.01" 
required
value={alcoolInput}
  onChange={ (e) =>setAlcoolInput(Number(e.target.value))}
/>

<label>Gasolina (preço por litro):</label>
<input
className="input"
type="number"
placeholder="4,90"
min="1"
step="0.01" 
required
value={gasolinaInput}
  onChange={ (e) =>setGasolinaInput(Number(e.target.value))}
/>

<input className="button" type="submit" value="calcular"/>
        </form>

        
        </main>
      </div>
     
  )
}

export default App
