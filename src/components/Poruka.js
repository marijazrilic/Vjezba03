import React from 'react'
const Poruka = ({poruka,promjenaVaznosti}) => {
    const oznaka =poruka.vazno? 'oznaci kao nevazno': 'oznaci kao vazno'
return (
<li className="poruka">{poruka.sadrzaj}
<button onClick={promjenaVaznosti}>{oznaka}</button></li>
)
}
export default Poruka