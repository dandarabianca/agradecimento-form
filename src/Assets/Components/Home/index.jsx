import React from 'react';
import './styles.css';
import Compras from '../../img/img-compras.png';


export default function Home(){
    return(
        <div>
        <div className='home-container'>
            <img src={Compras} alt='Logo compras'/>
            <h2>Obrigada pela compra!!</h2>
        </div>
        </div>
    )
}