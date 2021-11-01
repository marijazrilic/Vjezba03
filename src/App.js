import React, {useState} from 'react'
import Poruka from './components/Poruka'

const App = (props) => {
  const [ poruke, postaviPoruke] = useState(props.poruke)
  const [ unosPoruke, postaviUnos] = useState('unesi poruku...')

  const novaPoruka = (e) => {
    e.preventDefault()
    console.log('Klik', e.target)
  const noviObjekt = {
      id: poruke.length + 1,
      sadrzaj: unosPoruke,
      datum: new Date().toISOString(),
      vazno: Math.random() > 0.5
      }
      postaviPoruke(poruke.concat(noviObjekt))
      postaviUnos('')
  }

  const [ ispisSve, postaviIspis] = useState(true)
  const porukeZaIspis = ispisSve
? poruke
: poruke.filter(poruka => poruka.vazno === true)

  const promjenaUnosa = (e) => {
    console.log(e.target.value);
    postaviUnos(e.target.value)}

    const Footer = () => {
      const footerStil = {
      color: 'green',
      fontStyle: 'italic',
      fontSize : 16
      }
      return (
      <div style={footerStil}>
      <br />
      <em> Okviri i alati za razvoj web aplikacija</em>
      </div>
      )
      }

return (
<div>
<h1>Poruke</h1>
<div>
<button onClick={() => postaviIspis(!ispisSve)}>
Prikaz
</button>
</div>
<ul>
{porukeZaIspis.map(p =>
 <Poruka key={p.id} poruka={p} />
 )}
 </ul>
  <form onSubmit={novaPoruka}>
  <input value={unosPoruke} onChange={promjenaUnosa} />
    <button type='submit'>Spremi</button>
    </form>
  <Footer />
</div>
)
}
export default App